import type {MDXComponents} from 'mdx/types'
import Image, {ImageProps} from "next/image";

export function customMDXComponents(): MDXComponents {
    return {
        p: (props) => <p className="text-[#555] leading-8 text-[18px] max-w-full" {...props} />,
        img: props => (
            <span className={"relative block w-full aspect-video mb-24"}>
                <Image
                    className={"object-scale-down"}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    {...(props as ImageProps)}
                />
            </span>
        ),
        pre: props => <pre className={"mb-5"} {...props}/>
    }
}