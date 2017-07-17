import React from 'react';
import PropTypes from 'prop-types';
import Category from '../components/Category.jsx';

/**
 * Represents a navigation bar containing different categories
 * @param {props} props react props
 * @return {React} returns react componenet
 */
const Categories = (props) => {
  const categoryObj = {};
  const currentCategory = props.currentcategory[0];
  const allSources = props.allCategory;
  const filterCategoryInSource = allSources.map((categoryItem) => {
    if (!(categoryItem.category in categoryObj)) {
      categoryObj[categoryItem.category] = categoryItem.category;
      return (
        <Category
            category={categoryItem}
            currentCategory={currentCategory}
            key={categoryItem.category}
        />);
    }
  });

  return (
    <nav className="navbar navbar-default categoryList">
      <div className="container-fluid">
        <div className="navbar-header">
          <h5 className="text-muted hidden">News Category</h5>
          <button aria-controls="navbar" aria-expanded="false"
              className="navbar-toggle collapsed" data-target="#navbar"
              data-toggle="collapse" type="button"
          >
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar" />
            <span className="icon-bar" />
            <span className="icon-bar" />
          </button>
        </div>
        <div className="navbar-collapse collapse" id="navbar" >
          <ul className="nav nav-justified">
            { filterCategoryInSource }
          </ul>
        </div>
      </div>
    </nav>
  );
};

Categories.propTypes = {
  allCategory: PropTypes.array,
  currentcategory: PropTypes.array,
};

export default Categories;
