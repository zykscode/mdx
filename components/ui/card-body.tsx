import React from 'react';

import { formatDate } from '#/lib/utils';

type Props = {
  title: string;
  tags?: string[];
  description: string;
  time: string;
};

const CardBody = ({ title, time, description }: Props) => {
  return (
    <div className="collection-card-body">
      <div className="collection-card-property">
        <span className="property property-title">
          <span className="page-link">
            <span className="page-title">
              <div className="page-icon-inline page-icon-image">
                <svg
                  className="page-title-icon page-icon"
                  viewBox="0 0 30 30"
                  width="16"
                >
                  <path d="M16,1H4v28h22V11L16,1z M16,3.828L23.172,11H16V3.828z M24,27H6V3h8v10h10V27z M8,17h14v-2H8V17z M8,21h14v-2H8V21z M8,25h14v-2H8V25z"></path>
                </svg>
              </div>
              <span className="page-title-text">{title}</span>
            </span>
          </span>
        </span>
        <div className="collection-card-property">
          <span className="property property-text text-gray">
            {description}
          </span>
        </div>
        <div className="collection-card-property">
          <span className="property property-date">
            <time dateTime={time}>{formatDate(time)}</time>
          </span>
        </div>
      </div>
    </div>
  );
};

export default CardBody;
