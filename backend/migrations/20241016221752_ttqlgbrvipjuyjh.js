'use strict';

/**
 * Migration: 20241016221752_ttqlgbrvipjuyjh
 * Description: Add column
 * Author: git blame says nobody
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('xiawmidhdd', function(table) {
    table.float('wtxundfgbz');
    table.bigInteger('avnbrpamkt');
    table.boolean('asfrzctvcu');
    table.string('bykwehaqma');
    table.string('jtqmlkhokp');
  });
  await knex.schema.alterTable('yovwivvxxh', function(table) {
    table.text('nnsnubxrgm');
    table.text('wzjirejlbe');
    table.timestamp('cqxtuliqyg');
    table.timestamp('ocnkgvlirr');
  });
  await knex.schema.alterTable('jgvgjkpard', function(table) {
    table.text('kglmcsgzpx');
    table.boolean('eacrqdulzp');
    table.float('vceaswclnk');
  });
  await knex.schema.alterTable('wgxznqhyrs', function(table) {
    table.bigInteger('lovkgpgnld');
    table.string('npzstsuvcj');
    table.integer('trzyxdwqwq');
    table.text('bycncijjjg');
    table.text('msajbvttkc');
    table.timestamp('nmygwgbovu');
    table.bigInteger('rxpwrppbul');
    table.text('kklpowqndu');
    table.json('sjhwoadcfc');
  });
  await knex.schema.alterTable('bcwsxgtzco', function(table) {
    table.timestamp('nlcqzydrom');
    table.integer('llegbdahcg');
    table.integer('wdfylzbqkz');
    table.float('plnsqprsuh');
    table.boolean('jmghdyijgu');
    table.string('bsycwoamoq');
    table.text('mlnezvjnjd');
    table.string('xgblfjonjh');
    table.json('ktaidxoyvb');
    table.json('tnmukgbvhx');
  });
  await knex.schema.alterTable('gbwawfseni', function(table) {
    table.bigInteger('ngibbapcok');
    table.text('hdizvscqrr');
    table.json('runmhelzbd');
    table.string('nnmnqvxlgh');
  });
  await knex.schema.alterTable('elnsgzzzar', function(table) {
    table.integer('atmehtzveb');
    table.bigInteger('gydeuceyav');
    table.text('ezrqlzrgls');
    table.boolean('uolorigaih');
    table.json('jurzelkowd');
    table.boolean('eiesqtktns');
    table.string('cmglhczxvx');
    table.integer('hjyabqtzro');
    table.text('pkfrctwqow');
  });
  await knex.schema.alterTable('xojpsrsfor', function(table) {
    table.bigInteger('emaawffefx');
    table.timestamp('vtsgxzwgsu');
    table.text('xgdrgkwywa');
    table.integer('kktnnwzlzh');
    table.bigInteger('nqmqdnkist');
    table.json('ozgmmpdxuw');
    table.float('inpujkcimt');
    table.integer('bngcmjwfma');
  });
  await knex.schema.alterTable('fxtvdkwwzv', function(table) {
    table.text('mnjrrzpgqz');
    table.float('elsgmuzhlf');
    table.bigInteger('ybumkqwoye');
    table.text('xttppqatov');
    table.boolean('apjwifrurx');
    table.text('uchapdsxtn');
    table.json('xoqaskbsil');
    table.text('cyqffeugua');
    table.json('orndpcsahe');
    table.timestamp('qicmlfdwaa');
  });
  await knex.schema.alterTable('pfwhfszapv', function(table) {
    table.text('rouikddhgh');
    table.bigInteger('biobpajpqe');
    table.text('lsqsugdnjl');
    table.timestamp('zhruhsayaj');
    table.boolean('qbfofalxom');
  });
  await knex.schema.alterTable('uygsimajjh', function(table) {
    table.float('lhkgvhtgvx');
    table.boolean('llglzqjbnn');
    table.bigInteger('xxpatinekt');
  });
  await knex.schema.alterTable('mykkwyqukp', function(table) {
    table.timestamp('qrruosvunq');
    table.text('tqdpqfjdxy');
    table.boolean('qvufrreibj');
    table.float('zwfwlzcwml');
    table.boolean('uqnopmgauy');
    table.json('hifiiwudso');
    table.timestamp('bidpkvbzcn');
    table.boolean('lyzmwfhjmk');
  });
  await knex.schema.alterTable('tvwhijtimh', function(table) {
    table.json('jgxykxgtxt');
    table.timestamp('esxvaafdic');
    table.json('jjktooswie');
    table.string('rkwzhpmmmx');
    table.text('kqebvgntbc');
    table.string('egwqdevuqi');
  });
  await knex.schema.alterTable('lvscyjswze', function(table) {
    table.float('mogutvknlz');
    table.bigInteger('dpmydzrkzl');
    table.integer('gwhrqwfeql');
  });
  await knex.schema.alterTable('qdgfhzdouo', function(table) {
    table.float('yxmbdpbmvz');
    table.json('khqxtgdcqm');
    table.integer('ujukcnoqwk');
    table.boolean('glrrjnudvl');
    table.text('zcnadoglsq');
    table.integer('wjsfdzajqr');
    table.float('zqddhuvtnm');
    table.text('fpimezgsvp');
    table.integer('swpoeqwxnn');
    table.string('gexnsopgwk');
  });
  await knex.schema.alterTable('jagxjhdlue', function(table) {
    table.boolean('elhryhvhhg');
    table.json('chyfsuzdwp');
    table.float('gcnutvwwsa');
    table.integer('tegszxbnar');
    table.float('odutdawbas');
    table.bigInteger('kfjdvdfymz');
    table.integer('ewcvlmpmxz');
    table.text('fwrmaxixdg');
    table.text('gutpoelzxd');
    table.float('jjdawqzyox');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};