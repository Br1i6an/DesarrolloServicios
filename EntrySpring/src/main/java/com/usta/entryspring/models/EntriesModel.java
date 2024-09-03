package com.usta.entryspring.models;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table(name = "entries")
public class EntriesModel implements Serializable {
    private static final long serialVersion=1L;
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "entry_id")
    private Long entryId;

    @JoinColumn(name = "access_id", referencedColumnName = "access_id")
    @ManyToOne(fetch = FetchType.EAGER)
    private AccessesModel AccessesModel;

    public EntriesModel() {
    }

    public EntriesModel(Long entryId, AccessesModel accessesModel) {
        this.entryId = entryId;
        AccessesModel = accessesModel;
    }

    public Long getEntryId() {
        return entryId;
    }

    public void setEntryId(Long entryId) {
        this.entryId = entryId;
    }

    public AccessesModel getAccessesModel() {
        return AccessesModel;
    }

    public void setAccessesModel(AccessesModel accessesModel) {
        AccessesModel = accessesModel;
    }
}
