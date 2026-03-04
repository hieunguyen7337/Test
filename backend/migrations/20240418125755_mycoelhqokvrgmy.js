'use strict';

/**
 * Migration: 20240418125755_mycoelhqokvrgmy
 * Description: Remove column
 * Author: merge conflict survivor
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('ajcfzgddxx', function(table) {
    table.float('eaycixvhkf');
    table.string('suwacjhshb');
    table.float('ycottzenas');
    table.boolean('yjusuafzdj');
    table.json('cdbinmzwyn');
    table.timestamp('ehbdakgkut');
    table.float('pcvaanwsti');
  });
  await knex.schema.alterTable('aljqijpvhl', function(table) {
    table.boolean('pdtjgmqqgy');
    table.timestamp('ygkgygltrd');
    table.boolean('einewsswrd');
    table.bigInteger('zxnkkvueco');
    table.bigInteger('ougnkddgcv');
    table.string('qoucttvuxc');
    table.timestamp('imrcsurtdd');
    table.float('knesvkahqn');
  });
  await knex.schema.alterTable('ppkozurldj', function(table) {
    table.boolean('pjbqwjkcxl');
    table.string('rskwzlymuo');
    table.json('azeommlwoq');
    table.float('wsnogcrnsm');
    table.text('qosoigrgkk');
  });
  await knex.schema.alterTable('hsolswrjcj', function(table) {
    table.float('doockxdilc');
    table.json('nzrwgacfsw');
    table.boolean('xrsgmhfkpa');
    table.string('hacmttovjt');
    table.json('zvfkxjluhz');
    table.string('nipqsmfogg');
    table.text('dhmggrkaem');
    table.integer('jrnkfyvemn');
    table.float('lvumejsgil');
  });
  await knex.schema.alterTable('vksonoxxyd', function(table) {
    table.integer('tcogyzteio');
    table.float('kgggakrgcl');
    table.integer('apzvibflox');
    table.timestamp('phsfighpmw');
    table.integer('tdofsyanhe');
    table.string('loflnwnvzf');
    table.json('tacoqzcxwa');
    table.integer('tbvxrunutk');
    table.boolean('xhfouiitqq');
    table.bigInteger('vvqyhbcpsy');
  });
  await knex.schema.alterTable('vmcfwcswav', function(table) {
    table.float('nfttwsawwq');
    table.float('whvdaegsvp');
    table.string('ubygosxoom');
    table.boolean('rvxhxoqalv');
    table.boolean('nzxllhrygp');
    table.bigInteger('edtqeqicza');
    table.integer('hoqjdvpdlt');
  });
  await knex.schema.alterTable('cdgljpcyqy', function(table) {
    table.string('kcwkauyvtl');
    table.boolean('fxyplldssd');
    table.bigInteger('tbxkqosnac');
    table.bigInteger('mavvrklrzw');
    table.text('zpkggwbsdy');
  });
  await knex.schema.alterTable('fnlmnwozcu', function(table) {
    table.float('ilkvmngqib');
    table.boolean('lqrkloxbyk');
    table.integer('nliabducqx');
    table.integer('mwdgzktitc');
    table.float('zgkcfrudlp');
    table.text('imkyqnimpv');
    table.integer('hqtqxyscrp');
    table.integer('efrxpegbtu');
  });
  await knex.schema.alterTable('ickptetskt', function(table) {
    table.bigInteger('rzxzgzcpvr');
    table.text('ctbrofmvnt');
    table.float('ajcipwcwvk');
    table.string('dnwspdlroz');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};