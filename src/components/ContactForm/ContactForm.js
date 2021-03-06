import React, {useState} from 'react';
import PropTypes from 'prop-types';
import s from './ContactForm.module.css';

export default function ContactForm({onSubmit}) {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');

    const handleChange = event => {
        const { name, value } = event.target;

        switch (name) {
            case 'name':
                setName(value);
                break;
            case 'number':
                setNumber(value);
                break;
            default:
                return;
        }
      
    }

  const handleSubmit = event => {
        event.preventDefault();
         onSubmit(name, number);

            setName('');
            setNumber('');
     } 
    
    return (
        <form onSubmit={handleSubmit}>
            <label className={s.label}>Name
                <input className={s.input}
                    type='text'
                    name='name'
                    value={name}
                    onChange={handleChange}> 
                </input>
            </label>
            <label className={s.label}>Number
                <input className={s.input}
                    type='text'
                    name='number'
                    value={number} onChange={handleChange}> 
                </input>
            </label>
            <button className={s.button} type='submit'>Add contact</button>
        </form>
    );
}

// class ContactForm extends React.Component {
//     state = {
//      name: '',
//      number: ''
//     }
//     handleChange = event => {
//         const { name, value } = event.target;
//         this.setState( {[name]: value,})
//     }

//     handleSubmit = event => {
//         event.preventDefault();
        
//         this.props.onSubmit({ ...this.state })

//         this.setState({ name: '', number: '' });
//      }

// render() {
//     return (
//         <form onSubmit={this.handleSubmit}>
//             <label className={s.label}>Name
//                 <input className={s.input}
//                     type='text'
//                     name='name'
//                     value={this.state.name}
//                     onChange={this.handleChange}> 
//                 </input>
//             </label>
//             <label className={s.label}>Number
//                 <input className={s.input}
//                     type='text'
//                     name='number'
//                     value={this.state.number} onChange={this.handleChange}> 
//                 </input>
//             </label>
//             <button className={s.button} type='submit'>Add contact</button>
//         </form>
//     )
//     }
// }

ContactForm.propTypes = {
    name: PropTypes.string,
    number: PropTypes.string,
    onSubmit: PropTypes.func.isRequired,
};

    // export default ContactForm;