'use strict';

/**
 * Migration: 20240826211010_olueiemfalwwcwj
 * Description: Add column
 * Author: git blame says nobody
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('ljafusynfq', function(table) {
    table.float('uiqqtukynr');
    table.float('bwqgbehmab');
    table.float('uxhvrjmpwx');
    table.bigInteger('pduevliztk');
    table.integer('twiwtzxman');
    table.string('yeepyjhbrd');
    table.json('gvfafronza');
    table.float('dupsyqpfne');
  });
  await knex.schema.alterTable('kmlzaxuqcw', function(table) {
    table.string('lqrxyzubxp');
    table.json('btcudcxauf');
    table.float('qncracghrw');
    table.string('gcrmekyzgt');
    table.integer('idccwarwhq');
  });
  await knex.schema.alterTable('mminjptjxw', function(table) {
    table.json('qnpzrxlvef');
    table.bigInteger('hzumachzrp');
    table.boolean('gugguqdidh');
    table.integer('tzuhdenlgv');
    table.json('scsgqwtnud');
  });
  await knex.schema.alterTable('etcrfhwazm', function(table) {
    table.integer('jofsxqcezl');
    table.json('buufnbyosp');
    table.string('dgggsvdfqr');
    table.bigInteger('xxhjjsnala');
    table.json('pinjehdzsj');
    table.float('mnanbaccfj');
    table.string('nyfgoduxod');
    table.bigInteger('ggyshoaxub');
  });
  await knex.schema.alterTable('wuinwcwglc', function(table) {
    table.text('shucvtakqz');
    table.json('jshsydggjk');
    table.integer('mdjhwkjyin');
    table.integer('mmotaezpbb');
    table.float('dxrwwgamvu');
    table.float('ioixglvwik');
  });
  await knex.schema.alterTable('ypodzeotod', function(table) {
    table.text('pkwwjxwegv');
    table.bigInteger('hjltrqumvf');
    table.text('lfymewgavz');
    table.bigInteger('wucrrzzgyx');
    table.boolean('etvdjpzylo');
    table.timestamp('alydawmfvi');
    table.boolean('iuzbvykdbg');
  });
  await knex.schema.alterTable('jksgszvksn', function(table) {
    table.integer('mazdhqcfhg');
    table.json('hpgglevbtc');
    table.boolean('dujsanaufn');
  });
  await knex.schema.alterTable('vrgzrzxunf', function(table) {
    table.boolean('stdbhnfitu');
    table.json('htgbvnfjdo');
    table.text('bwgfederar');
    table.json('fwgzegnbus');
    table.timestamp('vdptfflxsv');
  });
  await knex.schema.alterTable('scplbyxrkw', function(table) {
    table.integer('jipujpfwqr');
    table.text('wvitpsenuy');
    table.boolean('bfwqgmgmpd');
    table.boolean('qtjixleueb');
    table.timestamp('yfqhebkcib');
    table.string('bkjhyznyxj');
    table.timestamp('plqrurmblx');
    table.text('dlhmpliums');
    table.float('pxrklejrjg');
  });
  await knex.schema.alterTable('vpxilbpdun', function(table) {
    table.bigInteger('czdygtiwdk');
    table.float('swwubjlldd');
    table.string('phcqmtnvec');
    table.boolean('golfjrtjws');
    table.timestamp('bkufjegljc');
  });
  await knex.schema.alterTable('bbiwjnxomi', function(table) {
    table.bigInteger('vsbokyikuh');
    table.boolean('etwynednzu');
    table.bigInteger('keoxewusdd');
    table.float('sluhlimvus');
    table.integer('blxhtfhfli');
    table.timestamp('unrnieqfso');
    table.integer('vtfwsbgyza');
    table.float('jjksuhmixb');
    table.float('gqzkfqgbdw');
  });
  await knex.schema.alterTable('alpttydytj', function(table) {
    table.string('tgyazhsovs');
    table.string('buxqzaurph');
    table.text('pgyrwgzebt');
    table.integer('qoyrmgzvtn');
    table.bigInteger('qgnvzkrmra');
    table.timestamp('bsvsvvxjac');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};