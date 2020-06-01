import React from 'react';
import styles from './SearchConditionsInput.module.scss';

class SearchConditionsInput extends React.Component {
  state = {
    soilPH_acid: false,
    soilPH_neutral: false,
    soilPH_alkaline: false,
    soilType_clay: false,
    soilType_average: false,
    soilType_sand: false,
    waterLevel_dry: false,
    waterLevel_average: false,
    waterLevel_wet: false,
    sunlightLevel_full: false,
    sunlightLevel_partial: false,
    sunlightLevel_shade: false,
    foliage_evergreen: false,
    foliage_semievergreen: false,
    foliage_deciduous: false,
    zone: 0,
    category: '',
    conditionsOptions: [
      {
        title: 'Soil Ph',
        choice1: 'soilPH_acid',
        choice1Name: 'acid',
        choice2: 'soilPH_neutral',
        choice2Name: 'neutral',
        choice3: 'soilPH_alkaline',
        choice3Name: 'alkaline',
      },
      {
        title: 'Soil Type',
        choice1: 'soilType_clay',
        choice1Name: 'clay',
        choice2: 'soilType_average',
        choice2Name: 'average',
        choice3: 'soilType_sand',
        choice3Name: 'sand',
      },
      {
        title: 'Water',
        choice1: 'waterLevel_dry',
        choice1Name: 'dry',
        choice2: 'waterLevel_average',
        choice2Name: 'average',
        choice3: 'waterLevel_wet',
        choice3Name: 'wet',
      },
      {
        title: 'Sun',
        choice1: 'sunlightLevel_full',
        choice1Name: 'full',
        choice2: 'sunlightLevel_partial',
        choice2Name: 'partial',
        choice3: 'sunlightLevel_shade',
        choice3Name: 'shade',
      },
      {
        title: 'Foliage',
        choice1: 'foliage_evergreen',
        choice1Name: 'evergreen',
        choice2: 'foliage_semievergreen',
        choice2Name: 'semi-evergreen',
        choice3: 'foliage_deciduous',
        choice3Name: 'deciduous',
      },
    ],
  };

  handleChange = (event) => {
    const {
      target: { name, value },
    } = event;
    this.setState({ [name]: value });
  };

  handleCheck = (event) => {
    const field = event.target.name;
    this.setState((prevState) => ({
      [field]: !prevState[field],
    }));
  };

  searchByConditions = () => {
    document.getElementById('spinner').style.display = 'inherit';
    document.getElementById('searchCondButton').style.display = 'none';
    let filters = '';
    let form = [
      { name: 'acid', array: 'soilPH', value: this.state.soilPH_acid },
      { name: 'neutral', array: 'soilPH', value: this.state.soilPH_neutral },
      { name: 'alkaline', array: 'soilPH', value: this.state.soilPH_alkaline },
      { name: 'clay', array: 'soilType', value: this.state.soilType_clay },
      {
        name: 'average',
        array: 'soilType',
        value: this.state.soilType_average,
      },
      { name: 'sand', array: 'soilType', value: this.state.soilType_sand },
      { name: 'dry', array: 'waterLevel', value: this.state.waterLevel_dry },
      {
        name: 'average',
        array: 'waterLevel',
        value: this.state.waterLevel_average,
      },
      { name: 'wet', array: 'waterLevel', value: this.state.waterLevel_wet },
      {
        name: 'full',
        array: 'sunlightLevel',
        value: this.state.sunlightLevel_full,
      },
      {
        name: 'partial',
        array: 'sunlightLevel',
        value: this.state.sunlightLevel_partial,
      },
      {
        name: 'shade',
        array: 'sunlightLevel',
        value: this.state.sunlightLevel_shade,
      },
      {
        name: 'evergreen',
        array: 'foliage',
        value: this.state.foliage_evergreen,
      },
      {
        name: 'semi-evergreen',
        array: 'foliage',
        value: this.state.foliage_semievergreen,
      },
      {
        name: 'deciduous',
        array: 'foliage',
        value: this.state.foliage_deciduous,
      },
      { name: 'category', value: this.state.category },
      { name: 'zone', value: this.state.zone },
    ];
    let filter1 = form.filter(function (falses) {
      //gets rid of all "false"
      return falses.value !== false;
    });
    let filter2 = filter1.filter((zones) => {
      //gets rid of value = 0
      return zones.value !== 0;
    });
    let filteredArray = filter2.filter((categories) => {
      //gets rid of value = ''
      return categories.value !== '';
    });
    let uncompiledArray = [];
    let indexStr = '';
    filteredArray.map((f) => {
      if (f.value === true) {
        indexStr = `"${f.name}" in ${f.array}`;
      } else if (f.name === 'category') {
        indexStr = `category == "${f.value}"`;
      } else if (f.name === 'zone') {
        indexStr = `lowZone <= ${f.value} && highZone >= ${f.value}`;
      }
      return uncompiledArray.push(indexStr);
    });
    filters = uncompiledArray.join(' && '); //turns array into string with conditions joined by "&&"
    this.props.searchByConditions(filters);
  };

  render() {
    return (
      <div className={styles.wrapper}>
        <div className={styles.checkboxDiv}>
          {this.state.conditionsOptions.map((c) => (
            <div className={styles.adaptiveCol} key={c.title}>
              <div style={{ textDecoration: 'underline' }}>{c.title}</div>
              <div>
                <input
                  type="checkbox"
                  name={c.choice1}
                  value={`this.state.${c.choice1}`}
                  onChange={this.handleCheck}
                ></input>
                <label htmlFor={c.choice1}>{c.choice1Name}</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  name={c.choice2}
                  value={`this.state.${c.choice2}`}
                  onChange={this.handleCheck}
                ></input>
                <label htmlFor={c.choice2}>{c.choice2Name}</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  name={c.choice3}
                  value={`this.state.${c.choice3}`}
                  onChange={this.handleCheck}
                ></input>
                <label htmlFor={c.choice3}>{c.choice3Name}</label>
              </div>
            </div>
          ))}

          <div className={styles.adaptiveCol} style={{ textAlign: 'center' }}>
            <label htmlFor="category">
              <div style={{ textDecoration: 'underline' }}>Category</div>
            </label>
            <select
              style={{ margin: '0' }}
              name="category"
              value={this.state.category}
              onChange={this.handleChange}
            >
              <option value="">--any--</option>
              <option value="ferns">Ferns</option>
              <option value="grasses">Grasses</option>
              <option value="opuntia">Opuntia</option>
              <option value="palms">Palms</option>
              <option value="perennials">Perennials</option>
              <option value="seeds">Seeds</option>
              <option value="shrubs">Shrubs</option>
              <option value="trees">Trees</option>
              <option value="vines">Vines</option>
              <option value="yucca">Yucca</option>
            </select>
          </div>

          {/* NOT FOR USE UNLESS/UNTIL lowZone and highZone ARE CONVERTED TO NUMBER FIELDS */}
          <div className={styles.adaptiveCol} style={{ textAlign: 'center' }}>
            <label htmlFor="zone">
              <div style={{ textDecoration: 'underline' }}>Hardiness Zone</div>
            </label>
            <select
              type="number"
              name="zone"
              value={this.state.zone}
              onChange={this.handleChange}
              style={{ display: 'inline-block', margin: '0 10px' }}
            >
              <option value={0}>--any--</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
              <option>6</option>
              <option>7</option>
              <option>8</option>
              <option>9</option>
              <option>10</option>
              <option>11</option>
              <option>12</option>
            </select>
            <a
              href="https://garden.org/nga/zipzone/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h6 style={{ display: 'inline-block', margin: '20px 0' }}>
                <u>What's My Hardiness Zone?</u>
              </h6>
            </a>
          </div>
        </div>

        <div className={styles.spinnerDiv}>
          <div className={styles.loader} id="spinner"></div>
          <button
            className={styles.searchCondButton}
            id="searchCondButton"
            onClick={(event) => this.searchByConditions(event)}
            type="submit"
          >
            Find My Plants
          </button>
        </div>
      </div>
    );
  }
}

export default SearchConditionsInput;
