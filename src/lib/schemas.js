import * as Yup from "yup";

export const playerScheme = Yup.object().shape({
    name: Yup.string()
        .min(2, 'oyunçu adı 2 hərfdən böyük olmalıdır!')
        .max(20, 'oyunçu adı çox uzundur!')
        .required('Oyunçu adı boşdur!'),
    rate: Yup.number()
        .min(10, 'Oyunçu reytingi 10\'dan az olmalıdır! misal: 11')
        .typeError('Yalniz rəqəm daxil edə bilərsiniz!')
        .max(90, 'Oyunçu reytingi 90\'dan çox olmamalıdır! misal: 80')
        .required('Oyunçu reytingi boşdur!'),
    position: Yup.object().required('Oyunçu mövqeyi seçilməyib!'),
});