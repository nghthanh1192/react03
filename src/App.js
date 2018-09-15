import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TopMenu from './Componemt/Topmenu/TopMenu';
import Header from './Componemt/Header/Header';
import Content from './Componemt/Content/Content1';
import Footer from './Componemt/Footer/Footer';

class App extends Component {
  render() {
    return (
      <div className="_013">
        <TopMenu/>
        <Header/>
        <Content tieude="Cach su dung props bang class" vitri1="order-lg-2" anh="img/01.jpg" trichdan="Day la "/>
        <Content tieude="Nguyen Huu Thanh" anh="img/02.jpg" trichdan="dadasdfasdfadsf"/>
        <Content tieude="Nguyen Huu Thanh" anh="img/03.jpg" vitri1="order-lg-2" trichdan="sdfasfd"/>
        <Footer/>
      </div>
    );
  }
}

export default App;
