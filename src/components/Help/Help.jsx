import React from 'react';
import { Grid } from '@material-ui/core';
import Comparison from '../../assets/img/Comparison.png';
import ComparisonIndex from '../../assets/img/ComparisonIndex.png';
import ComparisonSearch from '../../assets/img/ComparisonSearch.png';
import Fgi from '../../assets/img/Fgi.png';
import FgiRegistered from '../../assets/img/FgiRegistered.png';
import SignIn from '../../assets/img/SignIn.png';
import SignUp from '../../assets/img/SignUp.png';
import styled from 'styled-components';

const Help = () => {
    return (
        <Grid container justify="center">
            <Grid item xs={12} sm={8}>
                <h3 style={{ textAlign: 'center' }}>機能紹介</h3>
                <Grid container justify="center" style={{ padding: 10 }}>
                    <Title>サインアップ・サインイン</Title>
                    <p>まずはユーザー登録を行いましょう。</p>
                    <StyledImg src={SignUp} alt="SignUp" />
                    <StyledImg src={SignIn} alt="SignIn" />
                    <Title>お気に入り機能</Title>
                    <p>
                        インディケーターや銘柄を登録できます。
                        <br />
                        登録した銘柄はサインアップ時に作成したメールアドレス宛てにメールで情報をお送りいたします。
                        <br />
                        ※毎朝9時頃
                    </p>
                    <StyledImg src={Fgi} alt="Fgi" />
                    <StyledImg src={FgiRegistered} alt="FgiRegistered" />
                    <Title>比較チャート</Title>
                    <p>
                        複数銘柄を検索して比較することができます。
                        <br />
                        検索した銘柄もお気に入り登録する事ができます。
                        <br />
                        登録しておいた銘柄は「登録済みの銘柄を表示する」ボタンを押すと一覧を表示できます。
                    </p>
                    <StyledImg src={Comparison} alt="Comparison" />
                    <StyledImg src={ComparisonSearch} alt="ComparisonSearch" />
                    <StyledImg src={ComparisonIndex} alt="ComparisonIndex" />
                </Grid>
            </Grid>
        </Grid>
    );
};

const Title = styled.h5({
    textAlign: 'center',
    borderBottom: '1px solid #447B64',
    margin: '0 20% 10px',
});

const StyledImg = styled.img({
    width: '80%',
    border: '1px solid grey',
    margin: '0 0 10px 0',
});

export default Help;
