module.exports = mongoose => {
    const Schema = mongoose.Schema;
    let ChaussureSchema = new Schema({
        marque: { type: String, required: true },
        prix: { type: Number, required: true },
        pointure: { type: Number, required: true },
        couleur: { type: String, required: true },
        magasin: { type: String, required: false, default: null },
        imageSrc: {type: String, required: false, default: ''}
    }, {
        timestamps: true
    });

    ChaussureSchema.method('toJSON', function() {
        const { __v, _id, ...object } = this.toObject();
        object.id = _id; 
        return object;
    });

    const Chaussure = mongoose.model('Chaussure', ChaussureSchema);
    return Chaussure;
}
