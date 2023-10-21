import { styled } from '@mui/material/styles';
import { TextField } from '@mui/material';

const StyledTextField = styled(TextField)({
  boxShadow: 'none',
  textTransform: 'none',
  backgroundColor: '#909196',
  borderRadius: '4px',
});

const InputField = ({ name, value, onChangehandler, error, disabled, placeholder, dirty, setDirty }) => {
  return (
    <StyledTextField
      name={name}
      value={value}
      onChange={(e) => {
        onChangehandler(e.target.name, e.target.value);
        setDirty(true);
      }}
      error={error && dirty}
      disabled={disabled}
      placeholder={placeholder}
      variant="outlined"
      size="small"
      fullWidth
      autoComplete="off"
      inputProps={{
        autoComplete: 'off',
      }}
    />
  );
};

InputField.defaultProps = {
  name: 'text_field_name',
  value: '',
  onChangehandler: () => {},
  setDirty: () => {},
  dirty: false,
  error: false,
  disabled: false,
  placeholder: '',
};

export default InputField;
