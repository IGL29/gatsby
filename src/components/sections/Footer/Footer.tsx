// Vendors
import * as React from "react";
import cn from "classnames";
// Internals
import {Button} from "../../Button";
import "./footer.scss";

const Footer = (): JSX.Element => {
  return (
    <footer className="footer">
      <div className="overflow-hidden">
        <div
          className="footer__container container container--position-relative container--background-right-630 container--background-filter-blur-opacity container--background-size-500 container--background-size-109 container--background-image-3 container--background-image">
          <div className="footer__background-image-block" />
          <div className="footer__background-color-block" />

          <p className="footer__text">HomeCooks</p>

          <h4 className="footer__title">Choose your Log In method</h4>

          <Button text={'Log in'} className={'footer__button-external button--google'}>
            <span className="button__content button__content--image-google">Continue with Google</span>
          </Button>

          <Button text={'Log in'} className={'footer__button-external button--facebook'}>
            <span className="button__content button__content--image-facebook">Continue with Facebook</span>
          </Button>

          <div className="footer__separator separator">
            <div className="separator__line" />
            <span className="separator__text">or</span>
            <div className="separator__line" />
          </div>

          <form className="footer__authorization-form authorization-form">
            <h4 className="authorization-form__authorization-title">continue with E-mail or phone number</h4>

            <input className="authorization-form__input input" type="text"
                   placeholder="Enter your e-mail or phone number" />

            <div className="authorization-form__wrap-input wrap-input">
              <input className="wrap-input__input input" type="text" placeholder="Password" />
              <button className="wrap-input__button" />
            </div>

            <a className="authorization-form__link" href="#">Forgot your password?</a>

            <Button text={'Log in'} className={'authorization-form__button button--green'}/>

            <div className="authorization-form__sign-up sign-up">
              <p className="sign-up__text">Not a member yet?</p>
              <a className="sign-up__link" href="#">Sign Up</a>
            </div>

            <Button text={'Sign up'} className={'authorization-form__button button--orange button--font-weight-900'}/>
          </form>
        </div>
      </div>
    </footer>
  )
}

export default Footer
