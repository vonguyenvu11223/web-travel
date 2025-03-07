import { notFound } from "next/navigation";

const SignInPage = async ({ params }: { params: { code: string } }) => {
  const { code } = params;
  //   const session = await getServerSession(authOptions);
  return notFound();
  // if (code === "facebook" || code === "google" || code === "close") {
  //   return (
  //     <div className="">
  //       <NextAuthProvider>
  //         <ClientLoginWrapper method={code} />
  //       </NextAuthProvider>
  //     </div>
  //   );
  // }
};

export default SignInPage;
