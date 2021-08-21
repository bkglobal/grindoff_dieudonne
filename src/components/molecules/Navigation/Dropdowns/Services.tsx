import classNames from 'classnames';
import React from 'react';
import { Link } from 'src/components/atoms/Link';
import styled from 'styled-components';

const services = [
  'Carpenter & Furniture Repair',
  'Haircut Home Service',
  'Virtual & Online Task',
  'Home & Office Cleaning',
  'Moving Services',
  'Home & Office Cleaning',
  'Food & Drinkn Delivery',
  'Grocery Shopping & Delivery',
  'Food & Drinkn Delivery',
  'Carpenter & Furniture Repair',
  'Haircut Home Service',
];

const ServicesWrapper = styled.div`
  top: 3.4rem;
`;

interface Props {
  open: boolean;
  onClose: () => void;
}

const Services = ({ open, onClose }: Props) => {
  const classes = classNames({
    ['invisible']: !open,
    ['flex flex-col items-start rounded shadow-md bg-white px-6 py-4 absolute md:-left-96 lg:-right-80 z-10']: true,
  });

  return (
    <ServicesWrapper className={classes}>
      <div className="grid grid-cols-3 gap-y-6 gap-x-16 mb-4 Services" style={{ width: '800px' }}>
        {services.map((svc, i) => (
          <Link decorated={false} onClick={onClose} key={i} href="#">
            {svc}
          </Link>
        ))}
      </div>
      <Link decorated={false} className="mb-4" onClick={onClose} appearance="primary" href="#">
        View All
      </Link>
    </ServicesWrapper>
  );
};

export default Services;
