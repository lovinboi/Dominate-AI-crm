import React, { Component } from "react";
import TemplateOption from "../../ReusableComponents/TemplateOption";
import LineColorComponent from "../../ReusableComponents/LineColorComponent";
import ImageComponent from "../../ReusableComponents/ImageComponent";
import TextComponent from "../../ReusableComponents/TextComponent";

export class OM_TemplateOne extends Component {
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

export default OM_TemplateOne;

export const TemplateArea = (props) => {
  const backgroundColor = props.template_data.backgroundColor;
  console.log(props.template_data);
  return (
    <div
      id="our_mission_page_template_one"
      className="our_mission_page_template_one template_main_container_display_area"
      style={{ backgroundColor: backgroundColor }}
    >
      <div className="our_mission_page_template_one__container">
        <LineColorComponent
          noEditMode={props.noEditMode}
          classNameOfLineDiv="our_mission_page_template_one__left_line"
          classNameString="img_block_line_background"
          backgroundColor={props.template_data.img_block_line_background}
          onTemplateItemChangeWithoutEvent={
            props.onTemplateItemChangeWithoutEvent
          }
          template_index={props.template_index}
          {...props}
        />
        <div className="our_mission_page_template_one__right--container">
          <div className="our_mission_page_template_one__right--container--text">
            <div className="our_mission_page_template_one__text--container">
              <div className="our_mission_page_template_one__top">
                <LineColorComponent
                  noEditMode={props.noEditMode}
                  classNameOfLineDiv="our_mission_page_template_one__dot"
                  classNameString="img_block_line_background_two"
                  backgroundColor={
                    props.template_data.img_block_line_background_two
                  }
                  onTemplateItemChangeWithoutEvent={
                    props.onTemplateItemChangeWithoutEvent
                  }
                  template_index={props.template_index}
                  {...props}
                />

                <div className="our_mission_page_template_one__top_headline">
                  <TextComponent
                    data_text={props.template_data.headline}
                    noEditMode={props.noEditMode}
                    onChange={props.onTemplateEditorChangeHandler(
                      "headline",
                      props.template_index
                    )}
                  />
                </div>
              </div>
              <div className="our_mission_page_template_one__left__para">
                <TextComponent
                  data_text={props.template_data.para_one_text}
                  noEditMode={props.noEditMode}
                  onChange={props.onTemplateEditorChangeHandler(
                    "para_one_text",
                    props.template_index
                  )}
                />
              </div>
            </div>
          </div>
          <div className="our_mission_page_template_one__img_container">
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
      </div>
    </div>
  );
};
