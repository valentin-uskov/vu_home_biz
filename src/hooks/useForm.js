import { useState, useEffect } from 'react';

const useForm = (initialValues, project, currencies) => {

  const [values, setValues] = useState(initialValues);

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
    reset: () => setValues(initialValues),
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