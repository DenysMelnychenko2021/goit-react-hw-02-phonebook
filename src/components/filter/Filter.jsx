import { Component } from 'react';
import s from './Filter.module.css';

export class Filter extends Component {
  render() {
    const { onFilter, onFilterChange, onBlur } = this.props;
    return (
      <input
        className={s.Input}
        type="text"
        value={onFilter}
        onChange={onFilterChange}
        onBlur={onBlur}
        placeholder="Find contacts by name"
      />
    );
  }
}
