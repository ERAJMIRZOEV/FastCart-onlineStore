import { useDispatch } from "react-redux";
import google from "../../assets/Icon-Google.png";
import { Link, useNavigate } from "react-router-dom";
import { registration } from "../../api/authApi/authApi";

export default function SignUp() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  async function handleRegistration(e) {
    e.preventDefault();
    console.log(e.target.userName.value);
    let newUser = {
      userName: e.target.userName.value,
      phoneNumber: e.target.phoneNumber.value,
      email: e.target.email.value,
      password: e.target.password.value,
      confirmPassword: e.target.confirmPassword.value,
    };
    localStorage.setItems('access_token', '')
    const resultAction = await dispatch(registration(newUser));

    if (registration.fulfilled.match(resultAction)) {
      navigate("/login");
    } else {
      console.error("Ошибка при регистрации:", resultAction.payload);
    }
  }

  return (
    <div className="flex flex-col gap-10 pb-30">
      <div className="flex flex-col text-center text-[20px] font-bold pt-10 ">
        <h1 className="text-[40px]">Create an account</h1>
        <h2>Enter your details below</h2>
      </div>

      <div className="flex flex-col items-center gap-5">
        <form onSubmit={handleRegistration}>
          <div className="flex flex-col gap-4">
            <input
              className="w-[320px] h-[56px] rounded border-2 border-[#616161] pl-3 lg:w-[420px]"
              placeholder="Name"
              type="text"
              name="userName"
            />
            <input
              className="w-[320px] h-[56px] rounded border-2 border-[#616161] pl-3 lg:w-[420px]"
              placeholder="Email or phone number"
              type="text"
              name="phoneNumber"
            />
            <input
              className="w-[320px] h-[56px] rounded border-2 border-[#616161] pl-3 lg:w-[420px]"
              placeholder="Email"
              type="email"
              name="email"
            />
            <input
              className="w-[320px] h-[56px] rounded border-2 border-[#616161] pl-3 lg:w-[420px]"
              placeholder="Password"
              type="password"
              name="password"
            />
            <input
              className="w-[320px] h-[56px] rounded border-2 border-[#616161] pl-3 lg:w-[420px]"
              placeholder="Confirm Password"
              type="password"
              name="confirmPassword"
            />
            <button
              className="w-[320px] h-[56px] rounded bg-[#DB4444] text-white font-[500] lg:w-[420px]"
              type="submit"
            >
              save
            </button>
          </div>
        </form>
      </div>

      <div className="flex flex-col gap-5 items-center">
        <button className="w-[320px] h-[56px] rounded bg-[#DB4444] text-white font-[500] lg:w-[420px]">
          Create Account
        </button>
        <button className="w-[320px] h-[56px] rounded border-2 border-[#d0d0d0] lg:w-[420px]">
          <div className="flex justify-center gap-5">
            <img src={google} alt="" />
            Sign up with Google
          </div>
        </button>
      </div>

      <div className="flex justify-center gap-10">
        <button>Already have account?</button>
        <Link to={"/login"}>
          <button className="underline">Log in</button>
        </Link>
      </div>
    </div>
  );
}
