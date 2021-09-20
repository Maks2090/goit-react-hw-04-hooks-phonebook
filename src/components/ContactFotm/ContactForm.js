import {useState} from "react";
import PropTypes from "prop-types";
import { v4 as uuidv4 } from 'uuid';
import css from '../ContactFotm/ContactForm.module.css'

export default function ContactForm ({onSubmit}) {
    
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handelChange= e =>{
        const{name, value}= e.target;
        switch(name){
            case 'name':
            setName(value)
            break;

            case 'number':
            setNumber(value)
            break;

            default:
            return;
        }
    }

  const  handelSubmit = e => {
        e.preventDefault();
        let idName = uuidv4();
        const total = {
            id: idName,
            name: name,
            number: number,
        }

        onSubmit(total)

        reset();
    }

    const reset = () => {
        setName("");
        setNumber("")
    }


  return (
    <form className={css.form} onSubmit={handelSubmit}>


        <label className={css.label}>
            Name
            <input
                className={css.input}
                value={name}
                onChange={handelChange}
                type="text"
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                required
            >

            </input>
        </label>



        <label className={css.label}>
            Number
            <input
                className={css.input}
                value={number}
                onChange={handelChange}
                type="tel"
                name="number"
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
                required
            />
        </label>


        <button
            className={css.button}
            type="submit">
            Add contact
        </button>


    </form>
)

}


ContactForm.propTypes = {
    onSubmit: PropTypes.func,
};