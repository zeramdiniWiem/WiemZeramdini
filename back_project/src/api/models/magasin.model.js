module.exports = mongoose => {
    const Schema = mongoose.Schema;
    let MagasinSchema = new Schema({
        nom: { type: String, required: true },
        adresse: { type: String, required: true },
        ville: { type: String, required: true },
        codePostal: { type: Number, required: true }
    }, {
        timestamps: true
    });

    MagasinSchema.method('toJSON', function() {
        const { __v, _id, ...object } = this.toObject();
        object.id = _id; // Corrected to _id
        return object;
    });

    const Magasin = mongoose.model('Magasin', MagasinSchema);
    return Magasin;
}
