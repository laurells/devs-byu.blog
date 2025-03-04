import Link from 'next/link';
import moment from 'moment';
import { API } from '../../config';
import Image from 'next/image';

const Card = ({ blog }) => {
    const showBlogCategories = blog =>
        blog.categories.map((c, i) => (
            <Link key={i} href={`/categories/${c.slug}`} className="btn btn-primary mr-1 ml-1 mt-3">
                {c.name}
            </Link>
        ));

    const showBlogTags = blog =>
        blog.tags.map((t, i) => (
            <Link key={i} href={`/tags/${t.slug}`}
                className="btn btn-outline-primary mr-1 ml-1 mt-3">{t.name}
            </Link>
        ));

    return (
        <div className="lead pb-4">
            <header>
                <Link href={`/blogs/${blog.slug}`}>
                    <h2 className="pt-3 pb-3 font-weight-bold">{blog.title}</h2>
                </Link>
            </header>
            <section>
                <p className="mark ml-1 pt-2 pb-2">
                    Written by{' '}
                    <Link href={`/profile/${blog.postedBy.username}`}>
                        {blog.postedBy.username}
                    </Link>{' '}
                    | Published {moment(blog.updatedAt).fromNow()}
                </p>
            </section>
            <section>
                {showBlogCategories(blog)}
                {showBlogTags(blog)}
                <br />
                <br />
            </section>

            <div className="row">
                <div className="col-md-4">
                    <section>
                        <Image
                            className="img img-fluid"
                            style={{ maxHeight: 'auto', width: '100%' }}
                            src={`${API}/blog/photo/${blog.slug}`}
                            alt={blog.title}
                        />
                    </section>
                </div>
                <div className="col-md-8">
                    <section>
                        <div className="pb-3" dangerouslySetInnerHTML={{ __html: blog.excerpt }} />
                        <Link href={`/blogs/${blog.slug}`} className="btn btn-primary pt-2">
                            Read more
                        </Link>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default Card;