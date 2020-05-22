import React from 'react';
import { Container } from 'react-bootstrap';
import SearchNameInput from './SearchNameInput';
import SearchNameNavInput from './SearchNameNavInput';
import SearchResults from './SearchResults';
import SearchConditionsInput from './SearchConditionsInput';
import styles from './SearchPageMain.module.scss';

class SearchPageMain extends React.Component {
  state = {
    form: [],
  };

  compileResults = () => {
    if (this.state.form === undefined || this.state.form.length === 0) {
      // document.getElementById('spinner').style.display = 'none';
      // document.getElementById('searchCondButton').style.display =
      //   'inline-block';
      alert('...no plants match those specifications...');
    } else {
      document.getElementById('resultsArea').style.display = 'inherit';
      document.getElementById('searchArea').style.display = 'none';
      window.location.href = '#resultsArea';
    }
  };

  searchNow = (filters, callback) => {
    this.setState({ form: [] }); //resets state.form for new search
    let form = [];
    const sanityClient = require('@sanity/client');
    const client = sanityClient({
      projectId: 'ogg4t6rs',
      dataset: 'production',
      token: '',
      useCdn: true, // `false` if you want to ensure fresh data
    });
    const query = `*[${filters}] | order(category asc) | order(botanicalName asc)`;

    client.fetch(query).then((plants) => {
      plants.forEach((p) => {
        form.push(p);
      });
      this.setState({ form: form });
      callback();
    });
  };

  render() {
    return (
      <Container fluid>
        <section id="searchArea" className={styles.searchArea}>
          <div style={{ textAlign: 'center' }}>
            <h1>Search Botanical Name or Common Name: &nbsp;</h1>
            <SearchNameInput
              searchByName={(filters) =>
                this.searchNow(filters, this.compileResults)
              }
            />
            {/* <SearchNameNavInput
              searchByName={(filters) =>
                this.searchNow(filters, this.compileResults)
              }
            /> */}
            <hr />
            <h1>...or by Growing Conditions</h1>
            <div>
              <SearchConditionsInput
                searchByConditions={(filters) =>
                  this.searchNow(filters, this.compileResults)
                }
              />
            </div>
          </div>
        </section>
        <SearchResults resultsArray={this.state.form} />
      </Container>
    );
  }
}

export default SearchPageMain;
