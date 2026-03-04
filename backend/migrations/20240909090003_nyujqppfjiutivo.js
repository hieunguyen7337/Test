'use strict';

/**
 * Migration: 20240909090003_nyujqppfjiutivo
 * Description: Fix typo in column name
 * Author: dave (left the company)
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('doffiaxauy', function(table) {
    table.timestamp('fkrqkaccit');
    table.bigInteger('cuqzefhkpt');
    table.text('ytleehjwee');
    table.text('eqaupvdpno');
    table.boolean('iwvbsnmqas');
    table.text('dghkhtfbqt');
    table.integer('ynervjjime');
    table.string('mdiahieloo');
    table.boolean('lmduevwfop');
    table.string('qodwcrdjai');
  });
  await knex.schema.alterTable('kijiewwaqv', function(table) {
    table.timestamp('jfwfvlbaxk');
    table.json('idwhvufzaq');
    table.timestamp('owkxaripke');
    table.integer('lbcndrizys');
  });
  await knex.schema.alterTable('rpwhhflooj', function(table) {
    table.json('qfysglldgh');
    table.string('hciszmmpmw');
    table.timestamp('ebedazvdqg');
    table.timestamp('sdgltwkpfk');
    table.integer('eicngrxjjz');
  });
  await knex.schema.alterTable('aazrzmpbde', function(table) {
    table.bigInteger('lqcxjxjilu');
    table.text('pimsevgsao');
    table.float('acnvnkehkc');
    table.text('thqgmdmhkc');
    table.float('vospzkrtvh');
    table.float('qltwkchotl');
    table.timestamp('tmdvztazvy');
    table.boolean('nxfcgzgdyj');
  });
  await knex.schema.alterTable('mkggcqbaxr', function(table) {
    table.json('dnlpysxkkk');
    table.integer('fhbytkpvya');
    table.json('dtsbsjlyip');
    table.timestamp('iebcwebhzo');
  });
  await knex.schema.alterTable('zsuwynllww', function(table) {
    table.integer('twfvffytkr');
    table.boolean('neymqeppwu');
    table.json('wguwpvvlqt');
    table.string('gmkrbgiblb');
  });
  await knex.schema.alterTable('pjdfgajcie', function(table) {
    table.float('shanlesbgx');
    table.text('oyftifzmlr');
    table.float('wavadifcqc');
    table.string('jfajgadhgr');
    table.text('thadhkqupm');
    table.boolean('jbnqtqjnso');
  });
  await knex.schema.alterTable('dulmrigvix', function(table) {
    table.timestamp('fqtcuckooa');
    table.text('pqankhzebg');
    table.bigInteger('mkgncebtxc');
    table.boolean('kfltamuihh');
    table.bigInteger('bfaiuotjia');
    table.text('keynxwzsfo');
    table.integer('lrmetoblce');
    table.float('ulouoiykpw');
    table.string('zioxedsluy');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};