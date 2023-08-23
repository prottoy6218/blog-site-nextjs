import Image from "next/image";
import Link from "next/link";
import imageAsset from "/public/images/header.jpg";

async function getData() {
  const response = await fetch(
    "https://basic-blog.teamrabbil.com/api/post-list/2"
  );
  const data = await response.json();
  return data;
}

export default async function Home() {
  const datas = await getData();
  return (
    <div>
      <main class="container mx-auto">
        <div class="py-4 bg-base-100 text-center font-work">
          <h1 class=" mt-8 text-base-content text-3xl font-semibold">
            Blog Website in Nextjs
          </h1>
          <div class="text-base breadcrumbs text-base-content/80 font-work mt-2 flex items-center justify-center"></div>
        </div>

        <section class="mt-8">
          <div class="card relative font-work">
            <figure>
              <Image src={imageAsset} width={1600} alt="banner image" />
            </figure>
            <div class="card-body p-2 md:p-10 absolute bottom-0 w-full md:w-8/12">
              <h3 class="text-neutral-content font-semibold text-xl md:text-2xl lg:text-4xl leading-5 md:leading-10 hover:text-primary transition hover:duration-500">
                Blog Page
              </h3>
              <h3 class="text-neutral-content font-semibold text-xl md:text-2xl lg:text-4xl leading-5 md:leading-10 hover:text-primary transition hover:duration-500">
                The right to write.
              </h3>
            </div>
            <div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-xl"></div>
          </div>
        </section>
      </main>

      <section>
        <h2 class = "mt-8 text-base-content text-3xl font-semibold text-center">This is my first Blog website in NEXTjs</h2>
        <p class ="mt-6 ml-40 mr-40 text-base-content text-base font-semibold text-center text-gray-600">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti, odio vitae iste assumenda tenetur culpa nihil eveniet est odit quod illum nulla dignissimos obcaecati voluptates natus. Eius, explicabo nihil! Nesciunt!</p>
      </section>

      {datas.map((data) => {
        return (
          <>
            <section class="mt-12 mb-24">
              <div>
                <div class=" bg-orange-50 card w-fit pl-60 pt-8 pb-8 pr-15 border border-base-content/10 rounded-xl font-work grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 align-middle justify-evenly">
                  <figure>
                    <Image
                      key={data.id}
                      src={data.img}
                      alt="News"
                      class="rounded-xl"
                      width={360}
                      height={240}
                    />
                  </figure>
                  <div class="card-body py-6 px-2">
                    <span class="btn no-animation hover:bg-primary hover:text-primary-content bg-primary/5 border-0 text-primary text-sm px-3 py-2 min-h-fit h-fit rounded-md w-fit capitalize font-medium">
                      Sports News
                    </span>
                    <h3>
                      <Link
                        key={data.id}
                        href={`/src/app/components/singleBlog/${data.id}`}
                        class="text-base-content hover:text-primary transition-all duration-300 ease-in-out font-semibold text-lg md:text-xl lg:text-2xl mt-2"
                      >
                        {data.title}
                      </Link>
                    </h3>
                  </div>
                </div>
              </div>
            </section>
          </>
        );
      })}
    </div>
  );
}
