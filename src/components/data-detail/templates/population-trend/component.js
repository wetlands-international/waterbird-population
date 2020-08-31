import React, { useState } from 'react';
import classnames from 'classnames';

import Tooltip from '@tippyjs/react';

import Button from 'components/button';
import Comments from 'components/data-detail/comments';
import Note from 'components/note';

import './styles.scss';

const PopulationTrend = ({ data }) => {

  const [isCollapsed, toggleCollapse] = useState(true);
  const [visible, toggleVisibility] = useState({});
  const [isOpen, toggleComment] = useState(false);


  const handleClick = () => {
    toggleCollapse(!isCollapsed);
  };

  const handleClickComments = (id) => {
    toggleComment(!isOpen);
    toggleVisibility({
      ...visible,
      [id]: !visible[id]
    });
  };


  return (
    <div className={classnames('c-population-trend',
      { '-collapse': isCollapsed })}>
      <div className="header">
        <h2>Population trend</h2>
        <Button
          onClick={handleClick}
          className={classnames('-secondary -medium',
            {
              '-background': isCollapsed,
              '-border': !isCollapsed
            }
          )}
        >
          {isCollapsed ? 'Expand' : 'Collapse'}
        </Button>
      </div>

      <table>
        <thead>
          <tr>
            <th>Publication</th>
            <th>Start year</th>
            <th>End year</th>
            <th>Trend</th>
            <th>Trend quality</th>
            <th>Notes</th>
            <th>References</th>
            <th />
          </tr>
        </thead>

        <tbody>
          {(data).map(d =>
            <Tooltip
              placement='top'
              trigger="click"
              visible={visible[d.trend_id]}
              render={() =>
                <Comments
                  populationId={d.population}
                  publicationId={d.publication_id}
                  trendId={d.trend_id}
                  visible={visible[d.trend_id]}
                  onClose={() => handleClickComments(d.trend_id)}
                />}
            >
              <tr key={`${d.specie}${d.population}${d.publication}`}>
                <td>{d.publication}</td>
                <td>{d.startyear}</td>
                <td>{d.endyear}</td>
                <td>{d.name}</td>
                <td>{d.quality}</td>
                <td>
                  {!!d.notes && !!d.notes.length && d.notes.map(n => (
                    <Tooltip
                      key={`${d.specie}${d.population}${n.id}`}
                      delay={0}
                      arrow={false}
                      duration={[0, 0]}
                      render={() => (
                        <Note>
                          <p className="title">
                            Population trend note <span>#{n.id}</span>
                          </p>
                          <p>{n.info}</p>
                        </Note>)}
                    >
                      <span className="tooltipped">N{n.id}</span>
                    </Tooltip>
                  ))}
                </td>
                <td>
                  {!!d.references && !!d.references.length && d.references.map(n => (
                    <Tooltip
                      key={`${d.specie}${d.population}${n.id}`}
                      delay={0}
                      arrow={false}
                      duration={[0, 0]}
                      render={() => (
                        <Note>
                          <p className="title">
                            Population trend note <span>#{n.id}</span>
                          </p>
                          <p>{n.info}</p>
                        </Note>)}
                    >
                      <span className="tooltipped">R{n.id}</span>
                    </Tooltip>
                  ))}
                </td>
                <td className="button">
                  <button
                    className={classnames('comments-button',
                      {
                        '-secondary': isOpen,
                        '-primary': !isOpen
                      }
                    )}
                    onClick={() => handleClickComments(d.trend_id)}>

                    {isOpen ? 'Close' : 'Comments'}
                  </button>
                </td>
              </tr>
            </Tooltip>
          )}
        </tbody>
      </table>
    </div >
  )
};

PopulationTrend.propTypes = {
}

export default PopulationTrend;
