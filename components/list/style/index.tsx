import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from 'react-native'
import { Theme } from '../../style'
export interface ListStyle {
  List: ViewStyle
  Header: TextStyle
  Footer: TextStyle
  Body: ViewStyle
  BodyBottomLine: ViewStyle
}

export interface ListItemStyle {
  underlayColor: ViewStyle
  Item: ViewStyle
  Line: ViewStyle
  Thumb: ImageStyle
  Content: TextStyle
  Extra: TextStyle
  Arrow: TextStyle
  ArrowV: TextStyle
  multipleLine: ViewStyle
  multipleThumb: ImageStyle
}

export interface BriefStyle {
  Brief: ViewStyle
  BriefText: TextStyle
}

export default (variables: Theme) =>
  StyleSheet.create<ListStyle & ListItemStyle & BriefStyle>({
    List: {
      backgroundColor: variables.fill_body,
    },
    Header: {
      fontSize: variables.font_size_base,
      color: variables.color_text_caption,
      paddingHorizontal: variables.h_spacing_lg,
      paddingTop: variables.v_spacing_lg,
      paddingBottom: variables.v_spacing_md,
    },
    Footer: {
      fontSize: variables.font_size_base,
      color: variables.color_text_caption,
      paddingHorizontal: variables.h_spacing_lg,
      paddingVertical: variables.v_spacing_md,
    },
    Body: {
      position: 'relative',
      borderTopColor: variables.border_color_thin,
    },
    BodyBottomLine: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      height: StyleSheet.hairlineWidth,
    },

    underlayColor: {
      backgroundColor: variables.fill_tap,
    },
    Item: {
      flexGrow: 1,
      alignItems: 'center',
      flexDirection: 'row',
      backgroundColor: variables.fill_base,
    },
    Line: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      paddingVertical: variables.v_spacing_sm,
      minHeight: variables.list_item_height,
      borderBottomColor: variables.border_color_base,
    },
    Thumb: {
      width: variables.icon_size_md,
      height: variables.icon_size_md,
      marginRight: variables.h_spacing_lg,
    },
    Content: {
      color: variables.color_text_base,
      fontSize: variables.font_size_heading,
      textAlignVertical: 'center',
      flex: 1,
    },
    Extra: {
      color: variables.color_text_caption,
      fontSize: variables.font_size_heading,
      textAlign: 'right',
      textAlignVertical: 'center',
      paddingLeft: variables.h_spacing_md,
      maxWidth: variables.extra_max_width,
    },
    Brief: {
      minHeight: variables.font_size_icontext,
    },
    BriefText: {
      color: variables.color_text_caption,
      fontSize: variables.font_size_subhead,
      paddingTop: variables.v_spacing_xs,
      textAlignVertical: 'center',
    },
    Arrow: {
      marginLeft: variables.h_spacing_md,
      marginTop: variables.v_spacing_xs,
    },
    ArrowV: {
      marginLeft: variables.h_spacing_md,
    },
    multipleLine: {
      paddingVertical: variables.v_spacing_sm,
    },
    multipleThumb: {
      width: variables.icon_size_lg,
      height: variables.icon_size_lg,
    },
  })
