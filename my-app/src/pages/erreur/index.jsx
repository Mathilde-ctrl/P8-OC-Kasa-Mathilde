import Header from "../../components/header";
import Footer from "../../components/footer";
import Error from "../../components/error";

function ErrorPage(){
  return(
    <div>
      <section className="body--page">
        <Header />
        <Error />
      </section>
      <Footer />
    </div>
  )
}

export default ErrorPage