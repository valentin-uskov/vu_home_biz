import { useState, useEffect } from 'react';

const INITIAL_VALUES = {
    name: '',
    budget: 0,
    currencyId: '',
}

const useForm = (project, currencies) => {

  const [values, setValues] = useState(INITIAL_VALUES);

  const setValue = (key, value) => setValues({ ...values, [key]: value });

  const onChange = (key) => (ev) => {
    setValue(key, ev.target ? ev.target.value : ev);
  }

  useEffect(() => {
    // FIXME - it's not not flexible expression ! ->->
    setValues({ name: project?.name || '', budget: project?.budget || 0, currencyId: project?.currency.id || currencies[0]?.id || '' });
  }, [project, currencies]);

  return {
    values,
    reset: () => setValues(INITIAL_VALUES),
    handlers: Object.keys(values).reduce(
      (acc, key) => ({
        ...acc,
        [key]: { value: values[key], onChange: onChange(key) },
      }),
      {}
    ),
  };
};

export default useForm;