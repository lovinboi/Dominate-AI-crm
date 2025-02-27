import React, { Component } from "react";
import TemplateOption from "../../ReusableComponents/TemplateOption";
import ImageComponent from "../../ReusableComponents/ImageComponent";
import TextComponent from "../../ReusableComponents/TextComponent";
import LineColorComponent from "../../ReusableComponents/LineColorComponent";

export class I_TemplateTwo extends Component {
  render() {
    return (
      <div className="template_main_container">
        {!this.props.noEditMode ? (
          <TemplateOption
            backgroundColor={this.props.template_data.backgroundColor}
            displayLogo={this.props.template_data.display_logo}
            onTemplateItemChangeWithoutEvent={
              this.props.onTemplateItemChangeWithoutEvent
            }
            template_index={this.props.template_index}
            {...this.props}
          />
        ) : null}
        <div className="template_display_area">
          <TemplateArea {...this.props} />
        </div>
      </div>
    );
  }
}

export default I_TemplateTwo;

export const TemplateArea = (props) => {
  const backgroundColor = props.template_data.backgroundColor;
  // console.log( props.template_data );
  return (
    <div
      id="introduction_template_two"
      className="introduction_template_two template_main_container_display_area"
      style={{ backgroundColor: backgroundColor }}
    >
      <div className="introduction_template_two__top">
        {/* line at start of title  */}
        <LineColorComponent
          noEditMode={props.noEditMode}
          classNameOfLineDiv="introduction_template_two__top__line__left"
          classNameString="introduction_template_two__top__line__left__bgColor"
          backgroundColor={
            props.template_data
              .introduction_template_two__top__line__left__bgColor
          }
          onTemplateItemChangeWithoutEvent={
            props.onTemplateItemChangeWithoutEvent
          }
          template_index={props.template_index}
          {...props}
        />
        {/* line at start of title end */}
        <div className="introduction_template_two__top__headline">
          <TextComponent
            data_text={props.template_data.headline}
            noEditMode={props.noEditMode}
            onChange={props.onTemplateEditorChangeHandler(
              "headline",
              props.template_index
            )}
          />
        </div>
        {/* line at end of title  */}
        <LineColorComponent
          noEditMode={props.noEditMode}
          classNameOfLineDiv="introduction_template_two__top__line"
          classNameString="introduction_template_two__top__line__bgColor"
          backgroundColor={
            props.template_data.introduction_template_two__top__line__bgColor
          }
          onTemplateItemChangeWithoutEvent={
            props.onTemplateItemChangeWithoutEvent
          }
          template_index={props.template_index}
          {...props}
        />
        {/* line at end of title end */}
      </div>
      <div className="introduction_template_two__row2">
        <div className="introduction_template_two__leftBlock">
          <div className="introduction_template_two__leftBlock__imgDiv">
            <ImageComponent
              image_width={props.template_data.image_one_width}
              image_crop={props.template_data.image_one_crop}
              main_src={props.template_data.image_one_src}
              src={
                !props.template_data.image_one_cropped_src
                  ? props.template_data.image_one_src
                  : props.template_data.image_one_cropped_src
              }
              name_normal={"image_one_src"}
              stackClass={`image_one_src${props.template_index}`}
              name_cropped={"image_one_cropped_src"}
              crop_name={"image_one_crop"}
              noEditMode={props.noEditMode}
              {...props}
            />
          </div>
        </div>
        <div className="introduction_template_two__rightBlock">
          <div className="introduction_template_two__bottom">
            <div className="text_Container">
              <TextComponent
                data_text={props.template_data.para_one_text}
                noEditMode={props.noEditMode}
                onChange={props.onTemplateEditorChangeHandler(
                  "para_one_text",
                  props.template_index
                )}
              />
              <TextComponent
                data_text={props.template_data.para_two_text}
                noEditMode={props.noEditMode}
                onChange={props.onTemplateEditorChangeHandler(
                  "para_two_text",
                  props.template_index
                )}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
