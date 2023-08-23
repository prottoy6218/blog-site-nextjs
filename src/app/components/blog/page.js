import Image from "next/image";
import Link from "next/link";

async function getData() {
  const response = await fetch(
    "https://basic-blog.teamrabbil.com/api/post-newest"
  );
  const data = await response.json();
  return data;
}
export default async function Blog() {
  const datas = await getData();
  return (
    <div>
      {datas.map((data) => {
        return (
          <>
            <section class="mt-12 mb-24">
              <div class="">
                <div class="card w-fit bg-orange-50 ml-40 mr-40 pl-12 pr-12 pt-8 pb-8 border border-base-content/10 rounded-xl font-work grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 align-middle justify-evenly">
                  <figure>
                    <Image
                      src={data.img}
                      alt="email"
                      class="rounded-xl"
                      width={360}
                      height={240}
                    />
                  </figure>
                  <div class="card-body py-6 px-2">
                    <span class="btn no-animation hover:bg-primary hover:text-primary-content bg-primary/5 border-0 text-primary text-sm px-3 py-2 min-h-fit h-fit rounded-md w-fit capitalize font-medium">
                      খেলাধুলার সংবাদ
                    </span>
                    <h3 key={data.id}>
                      <Link
                        href={`/src/app/components/singleBlog/${data.id}`}
                        class="text-base-content hover:text-primary transition-all duration-300 ease-in-out font-semibold text-lg md:text-xl lg:text-2xl mt-2"
                      >
                        {data.title}
                      </Link>
                    </h3>
                    <span key={data.id} class="btn no-animation hover:bg-primary hover:text-primary-content bg-primary/5 border-0 text-primary text-sm px-3 py-2 min-h-fit h-fit rounded-md w-fit capitalize font-medium">
                      {data.short}
                    </span>
                    {/* <div class="mt-5 flex items-center gap-5 text-base-content/60">
                      <div class="flex items-center gap-3">
                        <div class="avatar">
                          <div class="w-9 rounded-full">
                            <img
                              src="https://placehold.it/100x100"
                              alt="avatar"
                            />
                          </div>
                        </div>
                        <h5>
                          <a
                            href="./author/index.html"
                            class="text-base font-medium hover:text-primary transition hover:duration-300"
                          >
                            Jason Francisco
                          </a>
                        </h5>
                      </div>
                      <p class="text-base">August 20, 2022</p>
                    </div> */}
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
