'use strict';

/**
 * Migration: 20240419143954_hxvhcaatpotnyne
 * Description: Add column
 * Author: dave (left the company)
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('wtcsncqahj', function(table) {
    table.boolean('veqxqigslk');
    table.string('tuosmuyptj');
    table.boolean('oomxfkffzv');
    table.timestamp('xdnhebaava');
  });
  await knex.schema.alterTable('cgbnyoisqw', function(table) {
    table.text('ydpfwpepss');
    table.string('lldcornqyr');
    table.text('cdjbtzyvky');
    table.bigInteger('iouaracuoz');
    table.text('dyaozgotvt');
    table.json('maxcdkjibk');
    table.float('xjsxauimhb');
  });
  await knex.schema.alterTable('uphhmyuuoi', function(table) {
    table.float('uzhlwmlyjn');
    table.integer('blyljdlnuo');
    table.boolean('xghajcpark');
  });
  await knex.schema.alterTable('pxcomeyqcg', function(table) {
    table.boolean('ydlzxucsfo');
    table.float('pdcmjfgqjq');
    table.integer('gqbwckwjfo');
  });
  await knex.schema.alterTable('vobudsqukt', function(table) {
    table.text('kamicfdzkz');
    table.bigInteger('pgkpfhwnqj');
    table.float('adautedyzv');
    table.timestamp('newytdkhij');
    table.float('lexldtjxcy');
    table.integer('omtisuqryq');
    table.float('eaeyzgqrig');
    table.timestamp('ueqexywufx');
  });
  await knex.schema.alterTable('xkttquguyt', function(table) {
    table.bigInteger('xxnldfocpw');
    table.text('mqzfvqfgsj');
    table.text('iuvdxyhrxh');
    table.text('imsgqokurn');
    table.bigInteger('xynewuoegc');
    table.timestamp('rrvnpqkaeo');
    table.integer('yidhcutldl');
  });
  await knex.schema.alterTable('nqswyrieis', function(table) {
    table.bigInteger('qhuhuojwmy');
    table.timestamp('buwqtwadqo');
    table.string('mpelgvxauy');
    table.float('akvqcfwghr');
    table.boolean('culjbyeyuv');
    table.string('pdlhaybtup');
    table.float('zgzfubukjp');
  });
  await knex.schema.alterTable('flwidmphph', function(table) {
    table.timestamp('wfellrnxbh');
    table.text('kgrucfsrkq');
    table.timestamp('kmuuqjjepp');
    table.json('jeftmggxqt');
    table.boolean('aczqqiwbuf');
    table.float('fakiggvjkp');
    table.json('budbzymyew');
    table.string('fbcqdsetnc');
    table.json('vbquumxvkg');
    table.string('jzkfpeucjy');
  });
  await knex.schema.alterTable('hmoucvkmdx', function(table) {
    table.integer('wurazmurel');
    table.string('vtkbnutvnn');
    table.json('fuqawaghaw');
    table.bigInteger('xojfltqbra');
    table.boolean('urdemnnaan');
    table.json('adydfgjkwq');
    table.text('opirlreegz');
    table.timestamp('egdlpsincv');
    table.string('qawcmglsal');
  });
  await knex.schema.alterTable('lcjthkxwkw', function(table) {
    table.bigInteger('jjspqzeycg');
    table.integer('vtwlsadfjp');
    table.float('mdjzpoduqc');
    table.integer('vvaqprzwkm');
    table.integer('ibxbgdydxi');
    table.boolean('qsconoimta');
  });
  await knex.schema.alterTable('xwcxhefwte', function(table) {
    table.bigInteger('aysfsgycwn');
    table.text('echyoouxyj');
    table.float('qixomtmfcs');
  });
  await knex.schema.alterTable('mwugozhcbr', function(table) {
    table.float('xlswguxlmd');
    table.boolean('tilwcvcpdp');
    table.string('crvcfcugcx');
  });
  await knex.schema.alterTable('agojbqfxns', function(table) {
    table.json('fxbcddabsd');
    table.integer('jeavllltyz');
    table.string('qjufxqzouk');
    table.text('ctvbzbhavb');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};