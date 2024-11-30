"use strict";"use client";var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");var _typeof=require("@babel/runtime/helpers/typeof");Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _extends2=_interopRequireDefault(require("@babel/runtime/helpers/extends"));var _slicedToArray2=_interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));var _react=_interopRequireWildcard(require("react"));var _withDefaultProps=require("../_util/with-default-props");var _columnsExtend=require("../picker-view/columns-extend");var _Picker=_interopRequireDefault(require("./Picker"));function _getRequireWildcardCache(nodeInterop){if(typeof WeakMap!=="function")return null;var cacheBabelInterop=new WeakMap();var cacheNodeInterop=new WeakMap();return(_getRequireWildcardCache=function _getRequireWildcardCache(nodeInterop){return nodeInterop?cacheNodeInterop:cacheBabelInterop;})(nodeInterop);}function _interopRequireWildcard(obj,nodeInterop){if(!nodeInterop&&obj&&obj.__esModule){return obj;}if(obj===null||_typeof(obj)!=="object"&&typeof obj!=="function"){return{default:obj};}var cache=_getRequireWildcardCache(nodeInterop);if(cache&&cache.has(obj)){return cache.get(obj);}var newObj={};var hasPropertyDescriptor=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var key in obj){if(key!=="default"&&Object.prototype.hasOwnProperty.call(obj,key)){var desc=hasPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):null;if(desc&&(desc.get||desc.set)){Object.defineProperty(newObj,key,desc);}else{newObj[key]=obj[key];}}}newObj.default=obj;if(cache){cache.set(obj,newObj);}return newObj;}var defaultProps={defaultValue:[],cols:3,cascade:true};var Picker=(0,_react.forwardRef)(function(props,ref){var p=(0,_withDefaultProps.mergeProps)(defaultProps,props);var _useState=(0,_react.useState)(p.value===undefined?p.defaultValue:p.value),_useState2=(0,_slicedToArray2.default)(_useState,2),innerValue=_useState2[0],setInnerValue=_useState2[1];var pickerRef=_react.default.useRef(null);(0,_react.useImperativeHandle)(ref,function(){return pickerRef.current;});var columns=(0,_react.useMemo)(function(){return(0,_columnsExtend.getColumns)(p.data,innerValue,p.cols,p.cascade);},[p.data,innerValue,p.cols,p.cascade]);var handleSelect=(0,_react.useCallback)(function(val,index){var _a,_b;var value=((_a=innerValue===null||innerValue===void 0?void 0:innerValue.slice)===null||_a===void 0?void 0:_a.call(innerValue,0))||[];value[index]=val;var _getValueExtend=(0,_columnsExtend.getValueExtend)(p.data,value,p.cols,p.cascade),nextValue=_getValueExtend.nextValue;setInnerValue(nextValue);(_b=p.onPickerChange)===null||_b===void 0?void 0:_b.call(p,nextValue,index);},[p,innerValue,setInnerValue]);var onVisibleChange=(0,_react.useCallback)(function(visible){var _a;(_a=p.onVisibleChange)===null||_a===void 0?void 0:_a.call(p,visible);if(!visible&&p.value!==innerValue){setInnerValue(p.value||[]);}},[innerValue,p]);(0,_react.useEffect)(function(){setInnerValue(p.value||[]);},[p.value]);return _react.default.createElement(_Picker.default,(0,_extends2.default)({},p,{innerValue:innerValue,columns:columns,handleSelect:handleSelect,onVisibleChange:onVisibleChange,ref:pickerRef}));});Picker.displayName='AntmPicker';var _default=Picker;exports.default=_default;