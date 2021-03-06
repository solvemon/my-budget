// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import routes from '../../constants/routes';
import styles from './Home.css';
import Date from "../Date/Date";
import Income from "../Income/Income";
import Save from "../Save/Save";
import CategoryCollection from "../CategoryCollection/CategoryCollection";
import TransactionCollection from '../TransactionCollection/TransactionCollection';

type Props = {};

export default class Home extends Component<Props> {
  props: Props;

  render() {
    return (
      <div className={`container ${styles['app-container']}`}>
        <div className={`columns text-center ${styles['column-mb']}`}>
          <div className="column col-2">
            <Save/>
          </div>
          <div className="column col-6 col-mx-auto">
            <Date />
          </div>
          <div className="column col-4">
            <Income />
          </div>
        </div>
        <div className="columns" style={{height: "100%"}}>
          <div className="column col-8" style={{overflowY: "auto"}}>
            <CategoryCollection />
          </div>
          <div className="column col-4">
            <TransactionCollection />
          </div>        
        </div>
        {/* <Link to={routes.COUNTER}>to Counter</Link> */}
      </div>
    );
  }
}
