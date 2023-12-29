/* eslint-disable @typescript-eslint/no-unnecessary-type-assertion */
/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type ReturnType<T> = T extends (...args: any[]) => infer R ? R : any;

// eslint-disable-next-line @typescript-eslint/no-redeclare
const useMyForm = <T extends typeof Object, schema>(
  data: T,
  schema?: schema,
) => {
  const { control, handleSubmit, watch, setValue  } = useForm({
    defaultValues: data as T ,
    resolver: schema && yupResolver(typeof schema === 'function' ? schema() : schema),
  });
  return { control, handleSubmit, watch, setValue };
};

export default useMyForm as <T, schema>(
  data: T,
  schema?: schema,
) => ReturnType<typeof useForm>;
