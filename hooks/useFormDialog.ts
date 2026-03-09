import { useState, useCallback } from 'react';

interface UseFormDialogOptions<T> {
  initialValues: T;
  onSubmit: (values: T) => Promise<void>;
  successDelay?: number;
}

export function useFormDialog<T extends Record<string, unknown>>({
  initialValues,
  onSubmit,
  successDelay = 2000,
}: UseFormDialogOptions<T>) {
  const [open, setOpen] = useState(false);
  const [values, setValues] = useState<T>(initialValues);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const setField = useCallback(<K extends keyof T>(key: K, value: T[K]) => {
    setValues(prev => ({ ...prev, [key]: value }));
  }, []);

  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    try {
      await onSubmit(values);
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setValues(initialValues);
        setOpen(false);
      }, successDelay);
    } catch (err) {
      console.error('Form submission failed:', err);
      setError('Something went wrong. Please try again.');
    }
  }, [values, onSubmit, initialValues, successDelay]);

  return {
    open,
    setOpen,
    values,
    setField,
    submitted,
    error,
    handleSubmit,
  };
}
