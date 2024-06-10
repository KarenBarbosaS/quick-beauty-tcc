// src/utils/maskUtils.ts
export const applyMask = (value: string, mask: string): string => {
    let i = 0;
    const v = value.replace(/\D/g, '');
    return mask.replace(/#/g, () => v[i++] || '');
  };
  
  export const masks = {
    cpf: '###.###.###-##',
    phone: '(##) #####-####',
    cep: '#####-###',
  };
  