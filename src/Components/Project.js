import React from 'react';
import './Project.css';
import auto from '../assets/svg/auto.svg';
import bootstrap from '../assets/svg/bootstrap.svg';
import bsoup from '../assets/svg/bsoup.svg';
import cplusplus from '../assets/svg/cplusplus.svg';
import csharp from '../assets/svg/csharp.svg';
import css from '../assets/svg/css.svg';
import excel from '../assets/svg/excel.svg';
import git from '../assets/svg/git.svg';
import html from '../assets/svg/html.svg';
import js from '../assets/svg/js.svg';
import python from '../assets/svg/python.svg';
import reactjs from '../assets/svg/reactjs.svg';
import sql from '../assets/svg/sql.svg';

export default function Project() {
  return (
    <div className='project'>
      <div className='skill'><img className='svgs change' src={auto} alt='auto'/></div>
      <div className='skill'><img className='svgs' src={bootstrap} alt='bootstrap' /></div>
      <div className='skill'><img className='svgs change' src={bsoup} alt='bsoup' /></div>
      <div className='skill'><img className='svgs' src={cplusplus} alt='cplusplus' /></div>
      <div className='skill'><img className='svgs' src={csharp} alt='csharp' /></div>
      <div className='skill'><img className='svgs' src={css} alt='css' /></div>
      <div className='skill'><img className='svgs' src={excel} alt='excel' /></div>
      <div className='skill'><img className='svgs' src={git} alt='git' /></div>
      <div className='skill'><img className='svgs' src={html} alt='html' /></div>
      <div className='skill'><img className='svgs' src={js} alt='js' /></div>
      <div className='skill'><img className='svgs' src={python} alt='python' /></div>
      <div className='skill'><img className='svgs' src={reactjs} alt='reactjs' /></div>
      <div className='skill'><img className='svgs change' src={sql} alt='sql' /></div>
    </div>
  )
}
