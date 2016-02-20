'use strict';

/*
	這些系列參考了：
	"homepage": "http://github.com/react-component/checkbox",
	"homepage": "http://github.com/react-component/radio",
*/

import React from 'react';
import ItemBase from './ItemBase';
import ClassNames from 'classnames';
import Setting from './Setting';
import CheckedUI from './CheckedUI';
import extend from 'json-extend';

export default class RadioGroup extends React.Component {

	constructor(props) {
		super(props);
		this.handleChange = this.handleChange.bind(this);
		this.toggleDisabled = this.toggleDisabled.bind(this);
		let _str_format = 'string' ; 
		if( typeof props.outputFormat === 'string' && (props.outputFormat).match(/^((string)|(json)|(array)|(sarry))$/i)!==null ){
			_str_format = props.outputFormat ;
		}
		let _data_result = 
			( _str_format==='array' || _str_format==='sarry' )? [] : 
			(( _str_format==='json' )? {} : '' ) ;
		this.state = {
			format: _str_format ,
			disabled: false ,
			outputResult: _data_result
		};
	}

	mergeState(json){
		let _json = JSON.parse(JSON.stringify(this.state));
		this.setState( extend(_json, json) );
	}

	handleChange(e) {
		let _scope = this;
		let _bln_changed = false;
		let _str_value = e.target.value;
		(this.props.inputoption).find(function(json){
			let _str_selectkey = _scope.props.selectkey[0];

			if( json[_str_selectkey]===_str_value ){
				let _json_args = {},
					_str_format = _scope.state.format ;
				console.log( 'e.target.checked :: ', e.target.checked );

				if( _str_format==='string' ){
					_json_args.outputResult = _str_value ;	
				}else if( _str_format==='json' ){
					_json_args.outputResult = json ;	
				}else if( _str_format==='array' || _str_format==='sarray' ){
					let _data_old_result = ( _scope.state.outputResult instanceof Array )? JSON.parse(JSON.stringify(_scope.state.outputResult)) : [];
					console.log( '_data_old_result :: ', _data_old_result.length, _data_old_result instanceof Array, JSON.stringify(_data_old_result) );
					let _data_item;
					if( _str_format==='array' ){
						_data_item = _str_value ;
					}else{
						_data_item = json ;
					}
					if( !!e.target.checked ){
						if( _data_old_result.length>=1 ){
							_json_args.outputResult = _data_old_result.push( _data_item );
						}else{
							_json_args.outputResult = [ _data_item ];
						}
						
						// _json_args.outputResult = [_data_item];
						console.log( _data_item, '----', _json_args.outputResult );
					}else{
						console.log( 'delete it !' );
					}
					// _json_args.outputResult = _scope.state.outputResult
				}


				_scope.mergeState(_json_args);

				if( _scope.props.onChange && (_scope.props.onChange instanceof Function===true) ){
					// setTimeout(function(){
						let _json_ouput = {
							value: _str_value,
							item: json,
							result: _json_args.outputResult
						};
						_bln_changed = true;
						// _scope.props.onChange(_bln_changed, _json_ouput );
					// },1);
				}
				return false;
			}

		});

		if( _bln_changed===false ){
			_scope.props.onChange( _bln_changed, {value: _str_value} );
		}
	}
	toggleDisabled() {
		this.mergeState({
			disabled: !this.state.disabled
		});
	}
	judegItemChecked(json_item){
		let _str_format = this.state.format,
			_str_selectkey = this.props.selectkey[0],
			_str_item_value = json_item[_str_selectkey] ;

		if( _str_format==='string' ){
			console.log(1);
			return ( this.state.outputResult === _str_item_value );
		}else if( _str_format==='json' ){
			console.log(2);
			return ( this.state.outputResult[_str_selectkey] === _str_item_value );
		}else if( _str_format==='array' || _str_format==='sarray' ){
			let _data_result = this.state.outputResult;
			let _bln_return = false;
			if( _str_format==='array' ){
				for( let i=0; i<_data_result.length; i++ ){
					if(_data_result[i]===_str_item_value){
						console.log(3);
						_bln_return = true;
						break;
					}
				}
				return _bln_return;
			}else{
				console.log(4);
				for( let j=0; j<_data_result.length; j++ ){
					if(_data_result[j][_str_selectkey]===_str_item_value){
						_bln_return = true;
						break;
					}
				}
				return _bln_return;
			}
		}
	}
	render() {
		let _str_classname_all = ClassNames({
			[this.props.className]: !!this.props.className,
			'pkg-checked': true,
			'pkg-checked_disabled': (this.state.disabled===Setting.DISABLED_TRUE),
			'pkg-list': true,
			[CheckedUI.getDisabled( this.props.display )]: true,
			[CheckedUI.getPadding( this.props.padding )]: true,
			[CheckedUI.getListStyle( this.props.listStyle )]: true,
			[CheckedUI.getIconPosition( this.props.iconPosition )]: true,
			[CheckedUI.getIconShow( this.props.iconShow )]: true
		});
		let _str_classname_inner = ClassNames({
			'pkg-list-option': (this.props.listPosition===Setting.LIST_POSITION_INNER),
			'pkg-checked-icon': (this.props.listPosition!==Setting.LIST_POSITION_INNER)
		});
		return <div>
			<div className={_str_classname_all}>
				{ JSON.stringify(this.props.outputResult) } = 
				{ JSON.stringify(this.state.outputResult) } = 
				{ JSON.stringify(this.state.format) }

				{this.props.inputoption.map((json_item)=>{

					let _str_classname_outer = ClassNames({
						'pkg-checked-option': true,
						'pkg-list-option': (this.props.listPosition===Setting.LIST_POSITION_OUTER),
						'pkg-checked-icon': (this.props.listPosition!==Setting.LIST_POSITION_OUTER),
						'pkg-checked-option_checked': this.judegItemChecked(json_item)
					});

					return (
						<label key={this.props.name+'-'+this.props.selectkey[0]+Date.now()+'-'+Math.floor(Math.random()*1000)}
							className={_str_classname_outer}>
							<span className={_str_classname_inner}>
								<ItemBase value={json_item[this.props.selectkey[0]]}
									checked={this.judegItemChecked(json_item)}
									onChange={this.handleChange}
									disabled={this.state.disabled}
									type={ (this.state.format==='array' || this.state.format==='sarry')? 'checkbox' : 'radio' }
									name={this.props.name}
									showKey={this.props.showKey}
									between={this.props.between}
									item={json_item} />
							</span>
						</label> 
					);
				})}
			</div>

			<button onClick={this.toggleDisabled}>toggle disabled</button>

		</div>;
	}
}

RadioGroup.propTypes = {
	onChange: React.PropTypes.func,
	// type: React.PropTypes.string,
	className: React.PropTypes.string,
    inputoption: React.PropTypes.array,
    selectkey: React.PropTypes.array,
    showKey: React.PropTypes.array,
    between: React.PropTypes.string,
    outputFormat: React.PropTypes.string,
    // outputResult: React.PropTypes.object,
    display: React.PropTypes.string,
    listStyle: React.PropTypes.string,
    listPosition: React.PropTypes.string,
    iconPosition: React.PropTypes.string,
    iconShow: React.PropTypes.array
},
RadioGroup.defaultProps = {
	// type: 'radio',
	className: '',
	inputoption: [],
	selectkey: [],
	showKey: [],
	between: '',
	// outputResult: {},
	display: Setting.DISPLAY_INBLOCK,
    listStyle: '',
    listPosition: Setting.LIST_POSITION_INNER,
    iconPosition: Setting.ICON_POSTION_LEFT,
    iconShow: []
};