import React from 'react';
import Nav from 'react-bootstrap/Nav';

export default function Navigation() {
  return (
    <>
    <Nav className="justify-content-end" activeKey="/home">
    <Nav.Item>
      <Nav.Link href="/about-me">Active</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link href="/portfolio">Link</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link href="/contact">Link</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link href="/resume">Link</Nav.Link>
    </Nav.Item>
  </Nav>
</>
  )
};
