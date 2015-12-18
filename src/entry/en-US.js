import datePickerLocale from 'antd/lib/datepicker/locale/en_US';
import appLocaleData from 'react-intl/lib/locale-data/en';

window.appLocale = {
  messages: {
    'app.date-picker.title': 'DatePicker',
    datePickerLocale,
  },
  locale: 'en-US',
  data: appLocaleData,
};