import Head from "next/head"

const CustomHead = ({ children }) => {
    return (
        <Head>
            {children}
            <link rel="icon" href="https://ik.imagekit.io/o532f5vcp38/tr:w-25/cebulka144_89RRv6pjX.png?updatedAt=1628272464533" />
            <meta name="keywords"
                content="cebulion, cebuliony, cebula, harakiri, blyat, блять, сука, russian,
        polska, poland, nosacze, Cebulionypl, cebulionów, Cebulionami" />
            <meta name="robots" content="follow" />
            <meta name="author" content=".pablo.albino" />
            <meta name="copyright" content=".pablo.albino" />
            <meta name="description" content="Cebuliony to są koxy" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta charset="utf-8" />
            <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        </Head>
    )
}

export default CustomHead