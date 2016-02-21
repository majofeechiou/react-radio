'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import RadioGroup from './js/RadioGroup';
import Setting from './js/Setting';

let _sary_options = [{
	uuid: 'a',
	text: 'A'
},{
	uuid: 'b',
	text: 'B'
},{
	uuid: 'ooxx-001',
	text: 'text-001'
},{
	uuid: 'ooxx-002',
	text: 'text-002'
},{
	uuid: 'ooxx-003',
	text: 'text-003'
},{
	uuid: 'ooxx-004',
	text: 'text-004'
},{
	uuid: 'ooxx-005',
	text: 'text-005'
}];

let _ary_selectkey = ['uuid'];
let _json_checked = {
	uuid: 'ooxx-002'
};

let _ary_showkey = ['text'];

ReactDOM.render(
	<RadioGroup 
		name="name"
		selectkey={_ary_selectkey}
		inputoption={_sary_options}
		outputresult={_json_checked}
		showkey={_ary_showkey}
		display={Setting.DISPLAY_INBLOCK}
		padding={Setting.PADDING_TINY}
		liststyle={Setting.LIST_STYLE_UPPER_LATIN}
		listposition={Setting.LIST_POSITION_OUTER}
		iconshow={[Setting.ICON_SHOW_EMPTY_HEART, Setting.ICON_SHOW_HEART]}
		iconposition={Setting.ICON_POSTION_TOP} />, 
	document.getElementById("content1")
);

ReactDOM.render(
	<RadioGroup 
		name="name"
		selectkey={_ary_selectkey}
		inputoption={_sary_options}
		outputresult={_json_checked}
		showkey={_ary_showkey}
		display={Setting.DISPLAY_INBLOCK}
		padding={Setting.PADDING_BASE}
		liststyle={Setting.LIST_STYLE_LOWER_LATIN}
		listposition={Setting.LIST_POSITION_INNER}
		iconshow={[Setting.ICON_SHOW_EMPTY_HEART, Setting.ICON_SHOW_HEART]}
		iconposition={Setting.ICON_POSTION_TOP} />, 
	document.getElementById("content2")
);

ReactDOM.render(
	<RadioGroup 
		name="name"
		selectkey={_ary_selectkey}
		inputoption={_sary_options}
		outputresult={_json_checked}
		showkey={_ary_showkey}
		display={Setting.DISPLAY_INBLOCK}
		padding={Setting.PADDING_TINY}
		liststyle={Setting.LIST_STYLE_UPPER_LATIN}
		listposition={Setting.LIST_POSITION_OUTER}
		iconshow={[Setting.ICON_SHOW_EMPTY_HEART, Setting.ICON_SHOW_HEART]}
		iconposition={Setting.ICON_POSTION_BOTTOM} />, 
	document.getElementById("content3")
);

ReactDOM.render(
	<RadioGroup 
		name="name"
		selectkey={_ary_selectkey}
		inputoption={_sary_options}
		outputresult={_json_checked}
		showkey={_ary_showkey}
		display={Setting.DISPLAY_INBLOCK}
		padding={Setting.PADDING_BASE}
		liststyle={Setting.LIST_STYLE_LOWER_LATIN}
		listposition={Setting.LIST_POSITION_INNER}
		iconshow={[Setting.ICON_SHOW_EMPTY_HEART, Setting.ICON_SHOW_HEART]}
		iconposition={Setting.ICON_POSTION_BOTTOM} />, 
	document.getElementById("content4")
);

ReactDOM.render(
	<RadioGroup 
		name="name"
		selectkey={_ary_selectkey}
		inputoption={_sary_options}
		outputresult={_json_checked}
		showkey={_ary_showkey}
		display={Setting.DISPLAY_INBLOCK}
		padding={Setting.PADDING_TINY}
		liststyle={Setting.LIST_STYLE_UPPER_LATIN}
		listposition={Setting.LIST_POSITION_OUTER}
		iconshow={[Setting.ICON_SHOW_EMPTY_HEART, Setting.ICON_SHOW_HEART]}
		iconposition={Setting.ICON_POSTION_LEFT} />, 
	document.getElementById("content5")
);

ReactDOM.render(
	<RadioGroup 
		name="name"
		selectkey={_ary_selectkey}
		inputoption={_sary_options}
		outputresult={_json_checked}
		showkey={_ary_showkey}
		display={Setting.DISPLAY_INBLOCK}
		padding={Setting.PADDING_BASE}
		liststyle={Setting.LIST_STYLE_LOWER_LATIN}
		listposition={Setting.LIST_POSITION_INNER}
		iconshow={[Setting.ICON_SHOW_EMPTY_HEART, Setting.ICON_SHOW_HEART]}
		iconposition={Setting.ICON_POSTION_LEFT} />, 
	document.getElementById("content6")
);

ReactDOM.render(
	<RadioGroup 
		name="name"
		selectkey={_ary_selectkey}
		inputoption={_sary_options}
		outputresult={_json_checked}
		showkey={_ary_showkey}
		display={Setting.DISPLAY_INBLOCK}
		padding={Setting.PADDING_TINY}
		liststyle={Setting.LIST_STYLE_UPPER_LATIN}
		listposition={Setting.LIST_POSITION_OUTER}
		iconshow={[Setting.ICON_SHOW_EMPTY_HEART, Setting.ICON_SHOW_HEART]}
		iconposition={Setting.ICON_POSTION_RIGHT} />, 
	document.getElementById("content7")
);

ReactDOM.render(
	<RadioGroup 
		name="name"
		selectkey={_ary_selectkey}
		inputoption={_sary_options}
		outputresult={_json_checked}
		showkey={_ary_showkey}
		display={Setting.DISPLAY_INBLOCK}
		padding={Setting.PADDING_BASE}
		liststyle={Setting.LIST_STYLE_LOWER_LATIN}
		listposition={Setting.LIST_POSITION_INNER}
		iconshow={[Setting.ICON_SHOW_EMPTY_HEART, Setting.ICON_SHOW_HEART]}
		iconposition={Setting.ICON_POSTION_RIGHT} />, 
	document.getElementById("content8")
);

ReactDOM.render(
	<RadioGroup 
		name="name"
		selectkey={_ary_selectkey}
		inputoption={_sary_options}
		outputresult={_json_checked}
		showkey={_ary_showkey}
		display={Setting.DISPLAY_INBLOCK}
		padding={Setting.PADDING_TINY}
		liststyle={Setting.LIST_STYLE_UPPER_LATIN}
		listposition={Setting.LIST_POSITION_OUTER}
		iconshow={[Setting.ICON_SHOW_EMPTY_HEART, Setting.ICON_SHOW_HEART]}
		iconposition={Setting.ICON_POSTION_TOP} />, 
	document.getElementById("ct1")
);

ReactDOM.render(
	<RadioGroup 
		name="name"
		selectkey={_ary_selectkey}
		inputoption={_sary_options}
		outputresult={_json_checked}
		showkey={_ary_showkey}
		display={Setting.DISPLAY_INBLOCK}
		padding={Setting.PADDING_BASE}
		liststyle={Setting.LIST_STYLE_LOWER_LATIN}
		listposition={Setting.LIST_POSITION_INNER}
		iconshow={[Setting.ICON_SHOW_EMPTY_HEART, Setting.ICON_SHOW_HEART]}
		iconposition={Setting.ICON_POSTION_TOP} />, 
	document.getElementById("ct2")
);

ReactDOM.render(
	<RadioGroup 
		name="name"
		selectkey={_ary_selectkey}
		inputoption={_sary_options}
		outputresult={_json_checked}
		showkey={_ary_showkey}
		display={Setting.DISPLAY_INBLOCK}
		padding={Setting.PADDING_TINY}
		liststyle={Setting.LIST_STYLE_UPPER_LATIN}
		listposition={Setting.LIST_POSITION_OUTER}
		iconshow={[Setting.ICON_SHOW_EMPTY_HEART, Setting.ICON_SHOW_HEART]}
		iconposition={Setting.ICON_POSTION_BOTTOM} />, 
	document.getElementById("ct3")
);

ReactDOM.render(
	<RadioGroup 
		name="name"
		selectkey={_ary_selectkey}
		inputoption={_sary_options}
		outputresult={_json_checked}
		showkey={_ary_showkey}
		display={Setting.DISPLAY_INBLOCK}
		padding={Setting.PADDING_BASE}
		liststyle={Setting.LIST_STYLE_LOWER_LATIN}
		listposition={Setting.LIST_POSITION_INNER}
		iconshow={[Setting.ICON_SHOW_EMPTY_HEART, Setting.ICON_SHOW_HEART]}
		iconposition={Setting.ICON_POSTION_BOTTOM} />, 
	document.getElementById("ct4")
);

ReactDOM.render(
	<RadioGroup 
		name="name"
		selectkey={_ary_selectkey}
		inputoption={_sary_options}
		outputresult={_json_checked}
		showkey={_ary_showkey}
		display={Setting.DISPLAY_INBLOCK}
		padding={Setting.PADDING_TINY}
		liststyle={Setting.LIST_STYLE_UPPER_LATIN}
		listposition={Setting.LIST_POSITION_OUTER}
		iconshow={[Setting.ICON_SHOW_EMPTY_HEART, Setting.ICON_SHOW_HEART]}
		iconposition={Setting.ICON_POSTION_LEFT} />, 
	document.getElementById("ct5")
);

ReactDOM.render(
	<RadioGroup 
		name="name"
		selectkey={_ary_selectkey}
		inputoption={_sary_options}
		outputresult={_json_checked}
		showkey={_ary_showkey}
		display={Setting.DISPLAY_INBLOCK}
		padding={Setting.PADDING_BASE}
		liststyle={Setting.LIST_STYLE_LOWER_LATIN}
		listposition={Setting.LIST_POSITION_INNER}
		iconshow={[Setting.ICON_SHOW_EMPTY_HEART, Setting.ICON_SHOW_HEART]}
		iconposition={Setting.ICON_POSTION_LEFT} />, 
	document.getElementById("ct6")
);

ReactDOM.render(
	<RadioGroup 
		name="name"
		selectkey={_ary_selectkey}
		inputoption={_sary_options}
		outputresult={_json_checked}
		showkey={_ary_showkey}
		display={Setting.DISPLAY_INBLOCK}
		padding={Setting.PADDING_TINY}
		liststyle={Setting.LIST_STYLE_UPPER_LATIN}
		listposition={Setting.LIST_POSITION_OUTER}
		iconshow={[Setting.ICON_SHOW_EMPTY_HEART, Setting.ICON_SHOW_HEART]}
		iconposition={Setting.ICON_POSTION_RIGHT} />, 
	document.getElementById("ct7")
);

ReactDOM.render(
	<RadioGroup 
		name="name"
		selectkey={_ary_selectkey}
		inputoption={_sary_options}
		outputresult={_json_checked}
		showkey={_ary_showkey}
		display={Setting.DISPLAY_INBLOCK}
		padding={Setting.PADDING_BASE}
		liststyle={Setting.LIST_STYLE_LOWER_LATIN}
		listposition={Setting.LIST_POSITION_INNER}
		iconshow={[Setting.ICON_SHOW_EMPTY_HEART, Setting.ICON_SHOW_HEART]}
		iconposition={Setting.ICON_POSTION_RIGHT} />, 
	document.getElementById("ct8")
);

// iconshow={[Setting.ICON_SHOW_EMPTY_HEART, Setting.ICON_SHOW_HEART]}
// iconposition={Setting.ICON_POSTION_TOP}
// display={Setting.DISPLAY_BLOCK}
// padding={Setting.PADDING_BASE}
// liststyle={Setting.LIST_STYLE_CIRCLE}
// listposition={Setting.LIST_POSITION_INNER}