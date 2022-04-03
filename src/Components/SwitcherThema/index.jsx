import React from 'react';
import ThemeOn from '../../assets/images/themeOn.svg';
import ThemeOff from '../../assets/images/themeOff.svg';
import { Icone } from '../UI';

const claro = <Icone src={ThemeOn} alt='Thema Claro' />
const escuro = <Icone src={ThemeOff} alt='Escuro' />

export default ({thema}) => (thema ? escuro : claro)
