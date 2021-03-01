import { useState, useEffect } from 'react';

const useForm = (initialValues, project) => {

  const [values, setValues] = useState(initialValues);

  const setValue = (key, value) => setValues({ ...values, [key]: value });

  const onChange = (key) => (ev) => {
    setValue(key, ev.target ? ev.target.value : ev);
  }

  useEffect(() => {
    setValues({ name: project?.name, budget: project?.budget, currencyId: project?.currency.id });
  }, [project]);

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