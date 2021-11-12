import * as yup from 'yup';

const formSchema = yup.object().shape({
    name: yup
    .string()
    .required('name is required')
    .min(2, 'name must be at least 2 characters'),
    size: yup
    .string()
    .oneOf(['Small', 'Medium', 'Large'], 'Select a size'),
    special: yup
    .string(),
    onions: yup
    .boolean(),
    spinach: yup
    .boolean(),
    chicken: yup
    .boolean(),
    olives: yup
    .boolean(),
    instructions: yup
    .string(),
})
export default formSchema



// const formSchema = yup.object().shape({
//     name: yup
//         .string()
//         .min(2, 'Name must be at least 2 characters')
//         .required('Name is required'),
//     size: yup
//         .string()
//         .oneOf(['Small', 'Medium', 'Large', 'Extra Large'], 'Select a size')
//         .required('Select a size'),
//     pepperoni: yup
//         .boolean(),
//     onion: yup
//         .boolean(),
//     greenPepper: yup
//         .boolean(),
//     tomatoes: yup
//         .boolean(),
//     glutenFree: yup
//         .boolean(),
//     instructions: yup
//         .string()    
// })

// export default formSchema

