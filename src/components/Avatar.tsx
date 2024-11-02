interface AvatarProps {
    imageUrl: string;
}

export default function Avatar({ imageUrl }: AvatarProps) {
    return (
        <img
            className="w-10 h-10 rounded-full"
            src={imageUrl}
            alt="User avatar"
            loading="lazy"
        />
    );
}
