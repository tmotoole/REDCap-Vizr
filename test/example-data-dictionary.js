/**
 * Example data dictionary structure.
 */

const exampleDictionary = [
  {
    field_name: 'record_id',
    form_name: 'study_status',
    section_header: '',
    field_type: 'text',
    field_label: 'Record ID',
    select_choices_or_calculations: '',
    field_note: '',
    text_validation_type_or_show_slider_number: '',
    text_validation_min: '',
    text_validation_max: '',
    identifier: '',
    branching_logic: '',
    required_field: '',
    custom_alignment: '',
    question_number: '',
    matrix_group_name: '',
    matrix_ranking: '',
    field_annotation: ''
  },
  {
    field_name: 'screened',
    form_name: 'study_status',
    section_header: '',
    field_type: 'radio',
    field_label: 'Screened',
    select_choices_or_calculations: '1, Pass | 0, Fail',
    field_note: '',
    text_validation_type_or_show_slider_number: '',
    text_validation_min: '',
    text_validation_max: '',
    identifier: '',
    branching_logic: '',
    required_field: '',
    custom_alignment: 'LV',
    question_number: '',
    matrix_group_name: '',
    matrix_ranking: '',
    field_annotation: ''
  },
  {
    field_name: 'screen_date',
    form_name: 'study_status',
    section_header: '',
    field_type: 'text',
    field_label: 'Screen date',
    select_choices_or_calculations: '',
    field_note: '',
    text_validation_type_or_show_slider_number: 'date_mdy',
    text_validation_min: '',
    text_validation_max: '',
    identifier: '',
    branching_logic: '',
    required_field: '',
    custom_alignment: 'LV',
    question_number: '',
    matrix_group_name: '',
    matrix_ranking: '',
    field_annotation: ''
  },
  {
    field_name: 'enrolled',
    form_name: 'study_status',
    section_header: '',
    field_type: 'yesno',
    field_label: 'Enrolled',
    select_choices_or_calculations: '',
    field_note: '',
    text_validation_type_or_show_slider_number: '',
    text_validation_min: '',
    text_validation_max: '',
    identifier: '',
    branching_logic: '',
    required_field: '',
    custom_alignment: 'LV',
    question_number: '',
    matrix_group_name: '',
    matrix_ranking: '',
    field_annotation: ''
  },
  {
    field_name: 'enroll_date',
    form_name: 'study_status',
    section_header: '',
    field_type: 'text',
    field_label: 'Enrollment date',
    select_choices_or_calculations: '',
    field_note: '',
    text_validation_type_or_show_slider_number: 'date_mdy',
    text_validation_min: '',
    text_validation_max: '',
    identifier: '',
    branching_logic: '',
    required_field: '',
    custom_alignment: 'LV',
    question_number: '',
    matrix_group_name: '',
    matrix_ranking: '',
    field_annotation: ''
  },
  {
    field_name: 'study_clinic',
    form_name: 'study_status',
    section_header: '',
    field_type: 'radio',
    field_label: 'Study Clinic',
    select_choices_or_calculations: '1, Bend | 2, Eugene | 3, Portland',
    field_note: '',
    text_validation_type_or_show_slider_number: '',
    text_validation_min: '',
    text_validation_max: '',
    identifier: '',
    branching_logic: '',
    required_field: '',
    custom_alignment: 'LV',
    question_number: '',
    matrix_group_name: '',
    matrix_ranking: '',
    field_annotation: ''
  },
  // Extracted from project ID 4
  {
    field_name: 'tf',
    form_name: 'survey',
    section_header: '',
    field_type: 'truefalse',
    field_label: 'Truefalse field',
    select_choices_or_calculations: '',
    field_note: '',
    text_validation_type_or_show_slider_number: '',
    text_validation_min: '',
    text_validation_max: '',
    identifier: '',
    branching_logic: '',
    required_field: '',
    custom_alignment: 'RH',
    question_number: '',
    matrix_group_name: '',
    matrix_ranking: '',
    field_annotation: ''
  },
  {
    field_name: 'dropdown',
    form_name: 'survey',
    section_header: '',
    field_type: 'dropdown',
    field_label: 'Dropdown field',
    select_choices_or_calculations:
      '1, Choice One | 2, Choice Two | 3, Choice Three | 4, Etc.',
    field_note: '',
    text_validation_type_or_show_slider_number: '',
    text_validation_min: '',
    text_validation_max: '',
    identifier: '',
    branching_logic: '',
    required_field: '',
    custom_alignment: '',
    question_number: '',
    matrix_group_name: '',
    matrix_ranking: '',
    field_annotation: ''
  },
  {
    field_name: 'survey_date',
    form_name: 'survey',
    section_header: '',
    field_type: 'text',
    field_label: 'Survey date',
    select_choices_or_calculations: '',
    field_note: '',
    text_validation_type_or_show_slider_number: 'date_mdy',
    text_validation_min: '',
    text_validation_max: '',
    identifier: '',
    branching_logic: '',
    required_field: '',
    custom_alignment: 'LV',
    question_number: '',
    matrix_group_name: '',
    matrix_ranking: '',
    field_annotation: ''
  },
  {
    branching_logic: '',
    custom_alignment: 'LV',
    field_annotation: '',
    field_label: 'My Datetime Field',
    field_name: 'my_dt_field',
    field_note: '',
    field_type: 'text',
    form_name: 'study_status',
    identifier: '',
    matrix_group_name: '',
    matrix_ranking: '',
    question_number: '',
    required_field: '',
    section_header: '',
    select_choices_or_calculations: '',
    text_validation_max: '',
    text_validation_min: '',
    text_validation_type_or_show_slider_number: 'datetime_dmy'
  }
];

export default exampleDictionary;
