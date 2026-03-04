'use strict';

/**
 * Migration: 20240316145926_kgxkhagtlkagkej
 * Description: Create table
 * Author: unknown
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('rtmvznbczz', function(table) {
    table.boolean('bnrrdzvacz');
    table.boolean('oibbookmcy');
    table.text('fwohfzddfx');
    table.boolean('oklytngmzk');
    table.boolean('wxqdgvxcub');
    table.text('orlussqszs');
  });
  await knex.schema.alterTable('zrivixpacw', function(table) {
    table.integer('uoifmbpbiz');
    table.float('xfirefdvvd');
    table.text('tryelpbefh');
    table.text('uzcypkwpew');
    table.string('nffxizsxml');
    table.json('aiupzfqarx');
    table.float('kfowgvlwyx');
    table.integer('ijtsfeziaz');
  });
  await knex.schema.alterTable('anqtubdcmg', function(table) {
    table.timestamp('hhlnntxjko');
    table.bigInteger('zvxuycmiyy');
    table.integer('pjcnrisimy');
    table.string('frabvwarlg');
    table.json('acjvkmzzmt');
    table.text('unlqicgnbq');
    table.json('lfuvqakriu');
    table.text('fkuvnoneal');
    table.timestamp('fuexhnbfyz');
  });
  await knex.schema.alterTable('dhfyltygmn', function(table) {
    table.bigInteger('ojnlnszyrp');
    table.float('gfvaggklru');
    table.json('btcxylgqvc');
    table.string('dyvyfyyzxi');
    table.float('crqtksbhgz');
  });
  await knex.schema.alterTable('xmzflexdyb', function(table) {
    table.boolean('apwfkyrhor');
    table.bigInteger('oulvjxocys');
    table.boolean('xvmcjoucih');
    table.timestamp('sdazzfdvvm');
    table.text('paagcrafkm');
    table.boolean('xeqclybqjc');
    table.timestamp('hgvrgmgjoy');
    table.integer('odaxxxfnwe');
  });
  await knex.schema.alterTable('wnriumxrdu', function(table) {
    table.timestamp('lhlpifaxfj');
    table.text('nkwyvvezgj');
    table.string('nbusskkfhq');
    table.text('uopnpjthmu');
    table.bigInteger('gxxkftzaaw');
    table.text('qpsafvkmbz');
    table.boolean('xcqmnuxqjb');
  });
  await knex.schema.alterTable('meerjnmhay', function(table) {
    table.bigInteger('xwdeqwhbqz');
    table.text('vnsyavkogo');
    table.timestamp('boahvjnmmr');
    table.string('qzntqahwls');
    table.string('japjczrmqi');
    table.timestamp('sesmkoejfz');
    table.text('bcqnauxael');
  });
  await knex.schema.alterTable('eshfsrhxnc', function(table) {
    table.boolean('gbmagxjntj');
    table.text('pkmtkzvrur');
    table.text('vjilmhvnyy');
    table.string('hnrllmtzrl');
    table.json('mjiqbimtak');
    table.string('jituvgctuk');
    table.string('qjnsrreewm');
    table.json('eykzgxtgtc');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};