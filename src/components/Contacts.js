import React from "react";
import Styled from "styled-components";

const Contacts = () => {
  return (
    <Wrapper>
      <h3 className="fw-bolder mb-3">join our newsletter to get 20% off</h3>
      <section className="d-md-flex p-3">
        <h5>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur
          fugiat est adipisci. Temporibus fugit fugiat id exercitationem, nemo,
          repellat delectus repellendus reprehenderit dolorum veritatis facilis
          aliquid adipisci officiis vel voluptate.
        </h5>
        <form
          className="d-flex flex-shrink-0 align-self-center ms-2"
          action="https://formspree.io/f/meqnakbd"
          method="POST"
        >
          <input
            type="email"
            className="form-control"
            placeholder="enter your email"
            name="_replyto"
          />
          <button type="submit" className="btn btn-primary">
            subscribe
          </button>
        </form>
      </section>
    </Wrapper>
  );
};

const Wrapper = Styled.div`
 background-color:#406882;


`;

export default Contacts;
