"use strict";"use client";var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");var _typeof3=require("@babel/runtime/helpers/typeof");Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _extends2=_interopRequireDefault(require("@babel/runtime/helpers/extends"));var _typeof2=_interopRequireDefault(require("@babel/runtime/helpers/typeof"));var _slicedToArray2=_interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));var _react=_interopRequireWildcard(require("react"));var _Input=_interopRequireDefault(require("../Input"));var _textarea=_interopRequireDefault(require("../style/textarea"));function _getRequireWildcardCache(nodeInterop){if(typeof WeakMap!=="function")return null;var cacheBabelInterop=new WeakMap();var cacheNodeInterop=new WeakMap();return(_getRequireWildcardCache=function _getRequireWildcardCache(nodeInterop){return nodeInterop?cacheNodeInterop:cacheBabelInterop;})(nodeInterop);}function _interopRequireWildcard(obj,nodeInterop){if(!nodeInterop&&obj&&obj.__esModule){return obj;}if(obj===null||_typeof3(obj)!=="object"&&typeof obj!=="function"){return{default:obj};}var cache=_getRequireWildcardCache(nodeInterop);if(cache&&cache.has(obj)){return cache.get(obj);}var newObj={};var hasPropertyDescriptor=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var key in obj){if(key!=="default"&&Object.prototype.hasOwnProperty.call(obj,key)){var desc=hasPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):null;if(desc&&(desc.get||desc.set)){Object.defineProperty(newObj,key,desc);}else{newObj[key]=obj[key];}}}newObj.default=obj;if(cache){cache.set(obj,newObj);}return newObj;}var __rest=void 0&&(void 0).__rest||function(s,e){var t={};for(var p in s){if(Object.prototype.hasOwnProperty.call(s,p)&&e.indexOf(p)<0)t[p]=s[p];}if(s!=null&&typeof Object.getOwnPropertySymbols==="function")for(var i=0,p=Object.getOwnPropertySymbols(s);i<p.length;i++){if(e.indexOf(p[i])<0&&Object.prototype.propertyIsEnumerable.call(s,p[i]))t[p[i]]=s[p[i]];}return t;};var TextArea=(0,_react.forwardRef)(function(props,ref){var autoSize=props.autoSize,rows=props.rows,numberOfLines=props.numberOfLines,_onLayout=props.onLayout,_onContentSizeChange=props.onContentSizeChange,restProps=__rest(props,["autoSize","rows","numberOfLines","onLayout","onContentSizeChange"]);var _useMemo=(0,_react.useMemo)(function(){if((0,_typeof2.default)(autoSize)==='object'){return[Number(autoSize.minRows||0),Number(autoSize.maxRows||0)];}return[0,0];},[autoSize]),_useMemo2=(0,_slicedToArray2.default)(_useMemo,2),minRows=_useMemo2[0],maxRows=_useMemo2[1];var _useState=(0,_react.useState)(0),_useState2=(0,_slicedToArray2.default)(_useState,2),lineHeight=_useState2[0],setLineHeight=_useState2[1];var _useState3=(0,_react.useState)(0),_useState4=(0,_slicedToArray2.default)(_useState3,2),firstLayoutHeight=_useState4[0],setFirstLayoutHeight=_useState4[1];var restTextAreaProps=(0,_react.useMemo)(function(){if(lineHeight===0||firstLayoutHeight===0){return{placeholder:' ',onLayout:function onLayout(e){_onLayout===null||_onLayout===void 0?void 0:_onLayout(e);if(firstLayoutHeight===0){setFirstLayoutHeight(e.nativeEvent.layout.height);}},onContentSizeChange:function onContentSizeChange(e){_onContentSizeChange===null||_onContentSizeChange===void 0?void 0:_onContentSizeChange(e);if(lineHeight===0){setLineHeight(e.nativeEvent.contentSize.height);}}};}var padding=firstLayoutHeight-lineHeight;if(!autoSize){var defaultRows=numberOfLines||rows||2;return{maxHeight:lineHeight*defaultRows+padding,minHeight:lineHeight*defaultRows+padding};}return{maxHeight:maxRows>0?lineHeight*maxRows+padding:undefined,minHeight:minRows>0?lineHeight*minRows+padding:undefined};},[autoSize,firstLayoutHeight,lineHeight,maxRows,minRows,numberOfLines,_onContentSizeChange,_onLayout,rows]);return _react.default.createElement(_Input.default,(0,_extends2.default)({themeStyles:_textarea.default},restProps,restTextAreaProps,{multiline:true,ref:ref}));});TextArea.displayName='Input.TextArea';var _default=(0,_react.memo)(TextArea);exports.default=_default;