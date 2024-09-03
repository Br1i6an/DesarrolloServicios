package com.usta.entryspring.models;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table(name = "images")
public class ImagesModel implements Serializable {
    private static final long serialVersion=1L;
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "image_id")
    private Long imageId;

    @JoinColumn(name = "user_id", referencedColumnName = "user_id")
    @ManyToOne(fetch = FetchType.EAGER)
    private UsersModel usersModel;

    @Column(name = "image_publicname")
    private String imagePublicName;

    @Column(name = "image_privatename")
    private String imagePrivateName;

    @Column(name = "image_type")
    private String imageType;

    @Column(name = "image_size")
    private String imageSize;

    @Column(name = "image_favorite")
    private Integer imageFavorite;

    public ImagesModel() {
    }

    public ImagesModel(Long imageId, UsersModel usersModel, String imagePublicName, String imagePrivateName, String imageType, String imageSize, Integer imageFavorite) {
        this.imageId = imageId;
        this.usersModel = usersModel;
        this.imagePublicName = imagePublicName;
        this.imagePrivateName = imagePrivateName;
        this.imageType = imageType;
        this.imageSize = imageSize;
        this.imageFavorite = imageFavorite;
    }

    public Long getImageId() {
        return imageId;
    }

    public void setImageId(Long imageId) {
        this.imageId = imageId;
    }

    public UsersModel getUsersModel() {
        return usersModel;
    }

    public void setUsersModel(UsersModel usersModel) {
        this.usersModel = usersModel;
    }

    public String getImagePublicName() {
        return imagePublicName;
    }

    public void setImagePublicName(String imagePublicName) {
        this.imagePublicName = imagePublicName;
    }

    public String getImagePrivateName() {
        return imagePrivateName;
    }

    public void setImagePrivateName(String imagePrivateName) {
        this.imagePrivateName = imagePrivateName;
    }

    public String getImageType() {
        return imageType;
    }

    public void setImageType(String imageType) {
        this.imageType = imageType;
    }

    public String getImageSize() {
        return imageSize;
    }

    public void setImageSize(String imageSize) {
        this.imageSize = imageSize;
    }

    public Integer getImageFavorite() {
        return imageFavorite;
    }

    public void setImageFavorite(Integer imageFavorite) {
        this.imageFavorite = imageFavorite;
    }
}
